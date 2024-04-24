const svgs = require("../../src/svg");

exports.handler = async (event, context) => {
  const { queryStringParameters } = event;
  const { type, text1, text2, height, width } = queryStringParameters;

  const error_svg = "origin";
  let svg;

  if (type in svgs) {
    svg = svgs[type];
  } else {
    svg = svgs[error_svg];
    console.log(svg("Type not valid", "refer readme for details !!"));
    return {
      statusCode: 200,
      headers: { "Content-Type": "image/svg+xml" },
      body: svg("Type not valid", "refer readme for details !!")
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "image/svg+xml" },
    body: svg({ text1, text2, height, width })
  };
};
