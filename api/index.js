// 引入依赖库
const svgs = require("../src/svg");

// Netlify Function 的主要处理函数
exports.handler = async (event, context) => {
  const { type, text1, text2, height, width } = event.queryStringParameters;

  // 设置返回的内容类型为 SVG
  const headers = {
    "Content-Type": "image/svg+xml"
  };

  // 默认错误 SVG
  const error_svg = "origin";

  let svg;

  // 判断请求的类型是否存在
  if (type in svgs) {
    svg = svgs[type];
  } else {
    // 如果请求的类型不存在，返回错误信息
    svg = svgs[error_svg];
    console.log(svg("Type not valid", "refer readme for details !!"));
    return {
      statusCode: 400,
      headers,
      body: svg("Type not valid", "refer readme for details !!")
    };
  }

  // 正确处理并返回结果
  return {
    statusCode: 200,
    headers,
    body: svg({ text1, text2, height, width })
  };
};
