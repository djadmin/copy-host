# Copy Host [![Build Status](https://travis-ci.org/djadmin/copy-host.svg?branch=master)](https://travis-ci.org/djadmin/copy-host)

Copy Host allows you to copy the hostname of the current tab to your clipboard.

[![Install](/screenshots/store_badge.png)](https://chrome.google.com/webstore/detail/copy-host/bnimbjbohdeakocjbldadiggnlmlgmie)

![Screenshot](/screenshots/shot.png)

## Why?

In some cases, browsers prepend `https://` to the URL when you try to copy it. I constantly copy URLs from the browser to the shell, and it drives me crazy. To avoid that, I built this simple Chrome extension to get only the hostname of the website you are currently browsing. Also, I made it a lot easier to copy the hostname with just a shortcut key, i.e., `Alt + C`.

For example, if you try to copy the URL https://www.google.com from the browser and then try to `ping` using a shell, it doesn't work.

`ping www.google.com` works perfectly and 'Copy Host' makes it easy to do that.

## Installation

Copy Host is available on [Chrome Web Store](https://chrome.google.com/webstore/detail/copy-host/bnimbjbohdeakocjbldadiggnlmlgmie). No additional permissions are required to install.

### Keyboard Shortcut

```Alt + C``` can be used to copy the hostname to your clipboard directly.

### Screenshot
![Screenshot](/screenshots/fullshot.png)

## Development

1. Clone this repo 
```git clone https://github.com/djadmin/copy-host```

2. Make your changes.

3. To test, go to: chrome://extensions, enable Developer mode, and load src as an unpacked extension.a

## Contributing

### Todo

* Configurable Keyboard Shortcut
* Option to Disable Popup 

### Issues

Feel free to submit issues and feature requests.

### License

Copyright (c) 2024 Dheeraj Joshi
Licensed under the [MIT license](http://opensource.org/licenses/MIT).
