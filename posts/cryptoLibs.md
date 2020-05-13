---
title: Crypto Trading Libraries
description: My experiences with Crypto trading libraries and what I recommend
img: https://www.finance-monthly.com/Finance-Monthly/wp-content/uploads/2019/11/Crypto.jpg
---

# **My Experience with various Crypto trading libraries**

To begin with, I am not responsible for any losses you incur when using any of these libraries. You should always backtest your strategies thoroughly. In addition, I am not affiliated with any of these libraries.

#### Note this list is incomplete and will be updated as I play around with new libraries

### #4 **Catalyst**, https://github.com/enigmampc/catalyst

##### **About the library:**

Catalyst is an open source algorithmic trading library for crypto-assets written in Python. It has support for various exchanges (Binance, Bitfinex and the other large players) and is built off of the Zipline project.

##### **What I like**

- **Ease of Use:** It seems very straight forward to build a custom strategy with Catalyst

#### **What I dislike**

- **Installation is a pain:** I could not figure out how to install Catalyst on my machine running Ubuntu 20.04, as a result I don't have much to say about Catalyst

##### **Closing Remarks for Catalyst**

Like I said earlier, cannot comment to much about Catalyst since I was unable to use it.

### #3 **Gryphon**, https://gryphon.readthedocs.io/en/latest/index.html

##### **About the library:**

Gekko is an open source Python library designed for algorithmic trading. It supports many exchanges, custom strategies, a dashboard which requires authentication, live trading and paper trading

##### **What I like**

- **Dashboard:** This dashboard service is probably the best one on the list, it supports user authentication (great for team), and feature rich charts
- **Documentation:** The Gryphon documentation is well done and easy to follow
- **Gryphon Data Service:** Allows you to retrieve high performance market data (note this is a standalone feature, you don't need to use Gryphon to use this feature), you can archive this data for further use (in ML or reporting).

#### **What I dislike**

- **Lack of a Backtesting engine:** Currently Gryphon does not have a back testing engine
- **Lack of additional features:** Gryphon is very bare bones, it doesn't have a lot of accessories that a lot of trading libraries support (such as built in ML models, indicators, and risk metrics ).

##### **Closing Remarks for Gryphon**

Unless you are a large company which can afford to build out its own backtesting engine or it already has one built I would avoid this library. Nonetheless, if you are a large team the dashboard features of Gryphon may make you consider this option

### #2 **Gekko**, https://gekko.wizb.it/

##### **About the library:**

Gekko is a javascript library which acts as a middleman between yourself and the various exchanges that it supports. It is an open source library created by Mike van Rossum. It's features include Calculating indicators, Executing live orders , Paper trading, Calculating profit and risk metrics, UI to display results of trades and backtesting.

##### **What I like**

- **Large Community:** you can easily find third party help, YouTube videos and articles. As a result, any problem you have ever had has been encountered before.
- **Large list of feature:** Every feature you could want has been implemented by Gekko.
- **Written in JavaScript:** The library performs very well, this is an additional plus if you are a JavaScript developer
- **Easy installation:** To get up and running take little to no time. Additionally, the library is very easy to setup on the cloud and other operating systems.

##### **What I dislike**

- **No longer maintained:** This means that your own you own for any bugs that may appear in the source code. As a result, I would not trust it long term in production. Not only that, but newer, well maintained libraries will surpass Gekko
- **Weak Backtesting engine:** With Gekko your backtest will out perform your live trades. This is because the Gekko's backtesting engine does not take into account volume, it assumes that your buy/sell orders will always have enough volume to fulfill your order. This is not usually the case with large Crypto Currencies such as Bitcoin or Etherium, not the case with smaller Crypto Currencies.

##### **Closing Remarks for Gekko**

For the most part Gekko is a great library. However, due to the fact that Gekko is no longer maintained and that it is a JavaScript library (my expertise is in Python) I don't use it in production. That being said, if you are comfortable with JavaScript and don't mind that it is no longer maintained I would definitely recommend it.

### #1 **Freqtrade**, https://www.freqtrade.io/en/latest/

##### **About the library:**

Freqtrade is a crypto-currency algorithmic trading software developed in python (3.6+) and supported on Windows, macOS and Linux. It features a Backtesting engine, Parameter Optimization tool that uses Machine learning, integration with Telegram, paper trading and a live trading bot.

##### **What I like**

- **Parameter Optimization Tool:** This is a really cool feature, it allows you to use the pre-build ML regressor algorithm. This saves a lot of time for developing a similar feature.
- **Documentation:** The documentation of Freqtrade is complete and easy to follow
- **Project Structure:** This is a bit of a strange one, but on of my largest gripes with Python is Pip. Most other Python crypto trading libraries are actualy Python packages that you install via Pip. Often Pip is really picky over which versions of Pip you have installed (one of the reasons I dislike it and prefer npm). The way Freqtrade is setup, it allows for you to download the Project, run a setup file then write your strategies and place them in a folder to be ran. I prefer this strategy as it allows me the developer to take of dependency management.

#### **What I dislike**

- **Setup Process:** This can sound a bit contradictory to what I stated above but in order to get this library to run you have to manage your virtual environments. This is better than dealing with Pip but still slightly confusing
- **Integration with Telegram:** Freqtrade can be configured with Telegram to allow you to monitor and control your trading bot from any device

##### **Closing Remarks for Gekko**

Overall Freqtrade is my go to library. It's a feature rich library which get my recommendation for most users who are interested in algorithmic trading for Crypto Currencies.
