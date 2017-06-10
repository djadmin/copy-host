# Copy Host

Copy Host allows you to copy hostname of the current tab to your clipboard.

![Screenshot](/screenshots/fullshot.png)

## Why ?

Chrome in some cases, prepend ```http://``` to the url when you try to copy. I constantly copy URL from the browser to the shell and it bothers me a lot. 
To avoid that, I built this very basic chrome extension to get only the hostname of the current tab.

For example, if you try to copy the URL https://www.google.com from the browser and try to ```ping``` using shell, it doesn't work.

```ping www.google.com``` works perfectly and 'Copy Host' makes it easy to do that.

## Installation

Copy Host is available on Chrome Web Store. No special permission is required to install.

### Development

1. Clone this repo.

```git clone https://github.com/djadmin/copy-host```

2. Make your changes.

3. To test, go to: chrome://extensions, enable Developer mode and load src as an unpacked extension.


## Contributing

### Todo

* Configurable Keyboard Shortcut
* Option to Disable Popup 

### Issues

Feel free to submit issues and feature requests.


### License

Copyright (c) 2017 Dheeraj Joshi
Licensed under the [MIT license](http://opensource.org/licenses/MIT).