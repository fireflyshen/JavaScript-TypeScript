var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      alert(xhr.responseText);
      // 获取响应头
      console.log(xhr.getAllResponseHeaders());
    } else {
      alert("Request was unsuccessful: " + xhr.status);
    }
  }
};

xhr.open("get", "https://jsonplaceholder.typicode.com/posts/1", false);

// 设置请求头
xhr.setRequestHeader("myHeader", "myValue");

// Accept:浏览器可以处理的内容类型。
// Accept-Charset:浏览器可以显示的字符集。
// Accept-Encoding:浏览器可以处理的压缩编码类型。
// Accept-Language:浏览器使用的语言。
// Connection:浏览器与服务器的连接类型。
// Cookie:页面中设置的 Cookie。
// Host:发送请求的页面所在的域。
// Referer:发送请求的页面的 URI。注意，这个字段在 HTTP 规范中就拼错了，所以考虑到兼容性也必须将错就错。(正确的拼写应该是 Referrer。)
// User-Agent:浏览器的用户代理字符串。

// 获取请求头

xhr.send(null);

function addURLParam(url, property, value) {
  url += url.indexof("?") == -1 ? "?" : "&";
  url += encodeURIComponent(property) + "=" + encodeURIComponent(value);
  return url;
}
