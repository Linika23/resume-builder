const { generateResumeContent } = require('../services/openaiService');

async function generateResume(req, res) {
  try {
    const userData = req.body;

    // Basic validation
    if (!userData.fullName || !userData.email) {
      return res.status(400).json({
        error: 'Missing required fields: fullName and email are required.',
      });
    }

    console.log(`📝 Generating resume for: ${userData.fullName}`);

    const result = await generateResumeContent(userData);

    console.log(`✅ Resume generated successfully for: ${userData.fullName}`);
    res.status(200).json(result);
  } catch (error) {
    console.error('❌ Resume generation error:', error.message);
    res.status(500).json({
      error: 'Failed to generate resume. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}

module.exports = { generateResume };
