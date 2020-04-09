function paramsToArray(url?: string) {
  let _url: string;
  if (url !== undefined) {
    _url = url.replace(/(.*)\?/g, "")
  } else {
    _url = location.search.slice(1);
  }

  var args: any = {}, params: string[] = _url.split("&");
  for (var i = 0, len = params.length; i < len; i++) {
    let arg = params[i].split('=');
    args[arg[0]] = arg[1];
  }
  return args;
}