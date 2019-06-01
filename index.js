// Hover over Logo
  function hover(element) {
    element.setAttribute('src', 'initab_logo_yellow.png');
    }

  function unhover(element) {
    element.setAttribute('src', 'initab_logo.png');
    }

//  Custom Links Message
  function dismiss() {
    document.getElementById("dismiss").style.display = "none";
  }


  var mr = 'Merge Requests';
  var pr = 'Pull Requests';
// switch to gitlab
  function changeGit() {
    var p = document.getElementById("gitlab");
    var q = document.getElementById("github");
    var r = document.getElementById("disp-github");
    var s = document.getElementById("disp-gitlab");
    var t = document.getElementById("last-head2");
    var u = document.getElementById("last-head");
    var a = document.getElementById("btn-2");

    if (p.style.display === "none") {
      p.style.display = "block",
      q.style.display = "none",
      r.style.display = "none",
      s.style.display = "block",
      t.style.display = "block",
      u.style.display = "none";
      document.getElementById("btn-2").innerHTML = mr;
      } else {
      p.style.display = "none",
      q.style.display = "block";
      document.getElementById("btn-2").innerHTML = pr;
    }
  }

// switch to github
  function changeGit2() {
    var p = document.getElementById("gitlab");
    var q = document.getElementById("github");
    var r = document.getElementById("disp-github");
    var s = document.getElementById("disp-gitlab");
    var t = document.getElementById("last-head2");
    var u = document.getElementById("last-head");
    var a = document.getElementById("btn-2");
    var b = document.getElementById("btn-3");
    if (q.style.display === "none") {
      q.style.display = "block",
      p.style.display = "none",
      s.style.display = "none",
      r.style.display = "block";
      u.style.display = "block",
      t.style.display = "none";
      document.getElementById("btn-2").innerHTML = pr;
      } else {
      q.style.display = "none",
      p.style.display = "block";
    }
  }

// Reddit Feed
  let data = [
    {
    "link": "https://hacks.mozilla.org/2019/05/faster-smarter-javascript-debugging-in-firefox/",
    "title": "Faster smarter JavaScript debugging in Firefox DevTools",
    "author": "u/magenta_placenta",
    "score": "204"
  },
    {
    "link": "https://devblogs.microsoft.com/typescript/announcing-typescript-3-5-rc/",
    "title": "Anouncing TypeScript 3.5 RC",
    "author": "u/DanielRosenwasser",
    "score": "8"
  },
  {
    "link": "https://cube.dev/blog/redash-dashboard-tutorial-with-cubejs/",
    "title": "Redash Dashboard Tutorial with Cube.js",
    "author": "u/BadBoyBandito",
    "score": "29"
  },
  {
    "link": "https://atypeofprogramming.com/",
    "title": "The clearer explanation of the fundamentals behind \"identity\" in FP I have ever seen",
    "author": "u/fagnerbrack",
    "score": "2"
  },
  {
    "link": "https://blog.smartive.ch/what-state-machines-are-and-why-we-use-them-5ea55183be09",
    "title": "What State Machines Are and Why We Use Them",
    "author": "u/whowanna",
    "score": "72"
  },
  {
    "link": "https://www.reddit.com/r/javascript/comments/bpmtzi/publish_reactsmartmodal_npm_package/",
    "title": "Publish react-smart-modal npm package",
    "author": ">u/_jskod",
    "score": "1"
  },
  {
  "link": "https://hacks.mozilla.org/2019/05/faster-smarter-javascript-debugging-in-firefox/",
  "title": "Faster smarter JavaScript debugging in Firefox DevTools",
  "author": "u/magenta_placenta",
  "score": "204"
  },
  {
  "link": "https://devblogs.microsoft.com/typescript/announcing-typescript-3-5-rc/",
  "title": "Anouncing TypeScript 3.5 RC",
  "author": "u/DanielRosenwasser",
  "score": "8"
  },
  {
  "link": "https://cube.dev/blog/redash-dashboard-tutorial-with-cubejs/",
  "title": "Redash Dashboard Tutorial with Cube.js",
  "author": "u/BadBoyBandito",
  "score": "29"
  },
  {
  "link": "https://atypeofprogramming.com/",
  "title": "The clearer explanation of the fundamentals behind \"identity\" in FP I have ever seen",
  "author": "u/fagnerbrack",
  "score": "2"
  },
  {
  "link": "https://blog.smartive.ch/what-state-machines-are-and-why-we-use-them-5ea55183be09",
  "title": "What State Machines Are and Why We Use Them",
  "author": "u/whowanna",
  "score": "72"
  },
  {
  "link": "https://www.reddit.com/r/javascript/comments/bpmtzi/publish_reactsmartmodal_npm_package/",
  "title": "Publish react-smart-modal npm package",
  "author": ">u/_jskod",
  "score": "1"
  }
];

  let output = '';
  for (var i = 0; i < data.length; i++) {
    output += '<li class="newsbox">' + '<a class="newsbox-link" href="#">' + '<h2 class="news-head misc">' + data[i].title + '</h2>' +
    '<p class="first-line lightblue misc">' + 'Posted by: ' + '<span class="author">' + data[i].author + '</span></p>' +
    '<p class="score darkblue misc">' + 'Reddit Score: ' + data[i].score + '</p>' +
    '<a class="comments-link" href="#">Link to Comments</a>' + '</a>' + '</li>';
  }
  document.getElementById('news').innerHTML = output;

// Browser History
let results = [
    {
    "result": "Anouncing TypeScript 3.5 RC",
    "time": "5 hours ago"
  },
  {
    "result": "JavaScript Guide",
    "time": "a month ago",
  },
  {
    "result": "JavaScript Guide - JavaScript | MDN",
    "time": "a month ago"
  },
  {
    "result": "Anouncing TypeScript 3.5 RC",
    "time": "a month ago"
  },
  {
    "result": "JavaScript Guide",
    "time": "two months ago",
  },
  {
    "result": "JavaScript Guide - JavaScript | MDN",
    "time": "two months ago"
  },
  {
    "result": "Anouncing TypeScript 3.5 RC",
    "time": "two months ago"
  },
  {
    "result": "JavaScript Guide",
    "time": "three months ago",
  },
  {
    "result": "JavaScript Guide - JavaScript | MDN",
    "time": "three months ago"
  }
];

  let content = '';
  for (var j = 0; j < results.length; j++) {
    content += '<li class="result darkblue">' + '<img src="heart-16-166777.png">' + ' ' +
    '<a class="darkblue" href="#">' + results[j].result + '</a>' +
    '<span class="time">' +  results[j].time + '</span>' +
    '</li>';
  }
  document.getElementById('search-results').innerHTML = content;

// Time
  var time = moment().format('LT');

  let l = time.indexOf('A');
  if (time.indexOf('A') === -1) {
    l = time.indexOf('P');
  }
  time = time.substring(0,l) + '<span class="timeAmPM">' + time.substring(l, l+2) + '</span>';
  document.getElementById('current-time').innerHTML = time;

  var date = moment().format('LL');
  document.getElementById('current-date').innerHTML = date;

// Show issues
  let issues = [
    {
      "title" : "Repo: Zeit/next.js",
      "number" : "Issue #5354",
      "text" : "Server side-only method to ensure server-only code is never sent to the browser"
    },
    {
      "title" : "Repo: Zeit/next.js",
      "number" : "Issue #4194",
      "text" : "Context provided in _app.js can't be consumed in pages in SSR"
    },
    {
      "title" : "Repo: Zeit/next.js",
      "number" : "Issue #5354",
      "text" : "Server side-only method to ensure server-only code is never sent to the browser"
    },
    {
      "title" : "Repo: Zeit/next.js",
      "number" : "Issue #4194",
      "text" : "Context provided in _app.js can't be consumed in pages in SSR"
    },
    {
      "title" : "Repo: Zeit/next.js",
      "number" : "Issue #5354",
      "text" : "Server side-only method to ensure server-only code is never sent to the browser"
    },
    {
      "title" : "Repo: Zeit/next.js",
      "number" : "Issue #4194",
      "text" : "Context provided in _app.js can't be consumed in pages in SSR"
    }
  ];

  let cont = '';
  for (var m = 0; m < issues.length; m++) {
    cont += '<li class="newsbox">' + '<a href="#" class="newsbox-link"><h2 class="darkblue git-title">' + issues[m].title + '</h2>' +
    '<p class="yellow git-subhead">' + issues[m].number + '</p>' +
    '<p class="git-text">' + issues[m].text + '</p></a>' +
    '</li>';
  }
  document.getElementById('github-list').innerHTML = cont;

  var newCont = '<ul class="issues-list" id="github-list">' + cont + '</ul>';


var pullRequests = '<div class="github-icon"><i class="fab fa-github"></i></div><p class="github" >No recent GitHub pull request activity in your browser history.</p>';
var prHistory = '<i class="fab fa-github-alt"></i> Github PR history</h1>';
var issueHistory = '<i class="fab fa-github-alt"></i> Github issues history</h1>';
var mergeRequest = 'No recent GitLab merge request activity in your browser history.';
var mergeHistory = '<i class="fab fa-gitlab"></i> Gitlab Merge Req. history</h1>';

// click on pull requests
function changeClass() {
  var x = document.getElementById("second");
  var y = document.getElementById("first");

  if (x.style.display === "none") {
    x.style.display = "block",
    y.style.display = "none",
    document.getElementById("github").innerHTML = pullRequests,
    document.getElementById("last-head").innerHTML = prHistory
  } else {
    x.style.display = "none",
    y.style.display = "block";
  }
}

// click on issues
function change() {
  var z = document.getElementById("first");
  var v = document.getElementById("second");
  if (z.style.display === "none") {
    z.style.display = "block",
    v.style.display = "none",
    document.getElementById("github").innerHTML = newCont,
    document.getElementById("last-head").innerHTML = issueHistory
  } else {
    z.style.display = "none",
    v.style.display = "block";
  }
}
