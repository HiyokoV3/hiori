# hiori
Chrome extension for [THE iDOLM@STER: Shiny Colors](http://bnent.jp/shiny-2pro/)

[![Build Status](https://travis-ci.org/shinycolors/hiori.svg?branch=master)](https://travis-ci.org/shinycolors/hiori)
![Github All Releases](https://img.shields.io/github/downloads/shinycolors/hiori/total.svg)
![GitHub tag](https://img.shields.io/github/tag/shinycolors/hiori.svg)

## For players
_**Hirori**, the software, is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. in no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software._

As of writing, the game is young and we have only started looking at game data. The mechanisms on this extension, might be cool and convenient, but we provide no warranty as to the safety of accounts that use it. Please use at your own risk. We do not know how tolerant the developers are about game client mods. Again, the user, the one installing the software, has the responsibility for his account, and/or related properties.

#### Installation
* [**Download**](https://github.com/shinycolors/hiori/releases)
  * Download the latest stable release from the Github Releases page
  * Unzip the file into your preferred directory
  * Go to `chrome://extensions` and enable developer mode
  * Select "_LOAD UNPACKED_", and browse to the directory where you unzipped
  * Launch / Refresh the game


* ~~Chrome WebStore~~
  * Free, one-click install
  * Will not be available until we get a stable release


* **Game Client** (_TBA_)
  * A desktop client is released by a different team, but has partially same codebase

#### Features
* **Interface translations** via module, `replacer`
* **Dialog translations** via module `dialog`
* ~~Infinite loading screen detection~~
* _Module-based framework_ allows many other features

## For developers
To setup a development environment for `hiori`

#### Requirmements
* NodeJS 8+
* npm 5+

#### Setup
* `npm i`
* `npm run build`
* Go to `chrome://extensions` and enable developer mode
* Select "_LOAD UNPACKED_", and browse to `build/dist`
* Launch / Refresh the game

During development, you may also run `npm run dev` to watch for file changes. It will automatically build each time.


## Credits
* **dragonjet**
* **EonIsAnOtaku**
* **ReikOme**
* **victrock**
* **MPThLee**
* **Karous**
* **Dazahet**
* **Rei**
* **Raemn**
* **Skybur**
* **rikineko**
* **Matsuri Kagami**
* **senior9324**
* **AzusaMera**
* _and everyone in the #game_data channel in the discord server_

#### License
See [LICENSE file](https://github.com/shinycolors/hiori/blob/develop/LICENSE)
