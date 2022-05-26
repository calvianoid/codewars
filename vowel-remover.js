function shortcut(string) {
  const pattern = /[aiueio]/g;
  const newStr = string.replace(pattern, "");
  return newStr;
}

console.log(shortcut("hello"));
