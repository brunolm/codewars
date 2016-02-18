// http://www.codewars.com/kata/parse-the-log

var logparser = /^(\d{4}-\d{2}-\d{2} \d{2}\:\d{2}:\d{2},\d{3})\s+(ERROR|INFO)\s+\[([^:]+):([^:]+)(?:\:((?!:)[A-Za-z]+))?\]\s+([^\n]+)/;