# Running Pygame in the Browser

Run a pygame application in the browser by compiling it to JavaScript.
There is a library called Pyjsdl that does this. It is built on top of the PyJs compiler. I managed to compile a Conway's game of life written with pygame into an HTML web page.
## Steps taken
* Install Ubuntu Linux in VirtualBox
I am using a Mac but pyjsdl works on Linux so I installed an Ubuntu VM on my machine

* Install `Python` and `pip`
```
sudo apt update
sudo apt install python3-pip
sudo apt install python2
curl https://bootstrap.pypa.io/get-pip.py --output get-pip.py
sudo python2 get-pip.py
```
* Install `git`
```
sudo apt install git
```
* Install [`Pyjs`](https://github.com/pyjs/pyjs/wiki/GettingStarted) from source
```
git clone https://github.com/pyjs/pyjs.git
cd pyjs
sudo python2 setup.py install
```
* Install pygame
```
sudo apt install python-pygame
```
* Download the [Pyjsdl](https://gatc.ca/2013/07/31/deploy-javascript-application-using-pyjsdl/) module and unpack into the folder containing your game python script
```
wget https://s3.gatc.ca/files/pyjsdl-0.22.zip
unzip pyjsdl-0.22.zip
```
* Modify python script
  * Replace `pygame` with `import pyjsdl as pygame`
  * Move the code inside the main loop to a `run()` function and get rid of the while loop. Call `
pyjsdl.display.setup(run)` to start executing the `run()` function in a loop automatically
* Compile the python script to JavaScript
```
pyjsbuild game.py
``` 
This generates a `game.html` file in the folder named `output` that can be run in a browser.

## Reference
http://bearums.github.io/games/pyjsdlguide.html
Note: This guide contains a mistake in Step 2: Install PyJsdl that tripped me up. The URL for downloading the zip file is wrong. It is not the actual PyJsdl library but just an exmple script you can use to test everything is set up properly.



