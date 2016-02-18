// http://www.codewars.com/kata/extract-the-domain-name-from-a-url-1

const domainName = (url) => url.match(/(?:https?:\/\/)?(?:www\.)?([^.]+)/)[1];