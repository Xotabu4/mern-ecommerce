// const AWS = require('aws-sdk');

// const keys = require('../config/keys');


exports.s3Upload = async image => {
  let imageUrl = undefined;
  let imageKey = undefined;

  // Mocked to not waste time and money on S3 setup
  // if (image) {
  //   const s3bucket = new AWS.S3({
  //     accessKeyId: keys.aws.accessKeyId,
  //     secretAccessKey: keys.aws.secretAccessKey,
  //     region: keys.aws.region
  //   });

  //   const params = {
  //     Bucket: keys.aws.bucketName,
  //     Key: image.originalname,
  //     Body: image.buffer,
  //     ContentType: image.mimetype,
  //     ACL: 'public-read'
  //   };

  //   const s3Upload = await s3bucket.upload(params).promise();

  //   imageUrl = s3Upload.Location;
  //   imageKey = s3Upload.key;
  // }

  return { imageUrl, imageKey };
};
