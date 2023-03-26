const catchAsync = require('./../utils/catchAsync');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  // from https://beta.openai.com/account/api-keys
  apiKey: process.env.APIKEY,
});

const openai = new OpenAIApi(configuration);

exports.createImage = catchAsync(async (req, res, next) => {
  let translatedSize;
  const { prompt, n, size } = req.body;

  if (size === 'small') {
    translatedSize = '256x256';
  } else if (size === 'medium') {
    translatedSize = '512x512';
  } else if (size === 'large') {
    translatedSize = '1024x1024';
  }

  const response = await openai.createImage({
    prompt,
    n: n || 1,
    size: translatedSize || '256x256',
  });

  const imageUrls = response.data.data;

  res.status(200).json({
    status: 'success',
    result: imageUrls,
  });
});
