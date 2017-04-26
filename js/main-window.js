MainWindow = {
    init: function(winamp) {
        this.winamp = winamp;
        this.nodes = {
            'close': document.getElementById('close'),
            'shade': document.getElementById('shade'),
            'buttonD': document.getElementById('button-d'),
            'position': document.getElementById('position'),
            'volumeMessage': document.getElementById('volume-message'),
            'balanceMessage': document.getElementById('balance-message'),
            'positionMessage': document.getElementById('position-message'),
            'songTitle': document.getElementById('song-title'),
            'time': document.getElementById('time'),
            'shadeTime': document.getElementById('shade-time'),
            'shadeMinusSign': document.getElementById('shade-minus-sign'),
            'visualizer': document.getElementById('visualizer'),
            'previous': document.getElementById('previous'),
            'play': document.getElementById('play'),
            'pause': document.getElementById('pause'),
            'stop': document.getElementById('stop'),
            'next': document.getElementById('next'),
            'eject': document.getElementById('eject'),
            'repeat': document.getElementById('repeat'),
            'shuffle': document.getElementById('shuffle'),
            'volume': document.getElementById('volume'),
            'kbps': document.getElementById('kbps'),
            'khz': document.getElementById('khz'),
            'mono': document.getElementById('mono'),
            'stereo': document.getElementById('stereo'),
            'balance': document.getElementById('balance'),
            'workIndicator': document.getElementById('work-indicator'),
            'titleBar': document.getElementById('title-bar'),
            'playlistButton': document.getElementById('playlist-button'),
            'window': document.getElementById('main-window'),
        };

        this.handle = document.getElementById('title-bar');
        this.body = this.nodes.window;

        this.textDisplay = MultiDisplay.init(Font, this.nodes.songTitle);
        this.textDisplay.addRegister('songTitle');
        this.textDisplay.addRegister('position');
        this.textDisplay.addRegister('volume');
        this.textDisplay.addRegister('balance');
        this.textDisplay.addRegister('message'); // General purpose

        this.textDisplay.showRegister('songTitle');

        this.textDisplay.startRegisterMarquee('songTitle');

        this._registerListeners();
        return this;
    },

    _registerListeners: function() {
        var self = this;

        this.nodes.close.onclick = function() {
            self.close();
        };

        this.nodes.shade.onclick = function() {
            self.nodes.window.classList.toggle('shade');
        };

        this.nodes.buttonD.onmousedown = function() {
            if(self.nodes.window.classList.contains('doubled')) {
                self.textDisplay.setRegisterText('message', 'Disable doublesize mode');
            } else {
                self.textDisplay.setRegisterText('message', 'Enable doublesize mode');
            }
            self.textDisplay.showRegister('message');
        };

        this.nodes.buttonD.onmouseup = function() {
            self.textDisplay.showRegister('songTitle');
        };

        this.nodes.buttonD.onclick = function() {
            self.winamp.toggleDoubledMode();
        };

        this.nodes.play.onclick = function() {
            self.winamp.play();
        };

        this.nodes.songTitle.onmousedown = function() {
            self.textDisplay.pauseRegisterMarquee('songTitle');
        };

        this.nodes.songTitle.onmouseup = function() {
            setTimeout(function () {
                self.textDisplay.startRegisterMarquee('songTitle');
            }, 1000);
        };

        this.nodes.position.onmousedown = function() {
            if(!self.nodes.window.classList.contains('stop')){
                self.textDisplay.showRegister('position');
                self.nodes.window.classList.add('setting-position');
            }
        };

        this.nodes.position.onmouseup = function() {
            self.textDisplay.showRegister('songTitle');
            self.nodes.window.classList.remove('setting-position');
        };

        this.nodes.position.oninput = function() {
            var newPercentComplete = self.nodes.position.value;
            var newFractionComplete = newPercentComplete/100;
            var newElapsed = self._timeString(self.winamp.getDuration() * newFractionComplete);
            var duration = self._timeString(self.winamp.getDuration());
            var message = "Seek to: " + newElapsed + "/" + duration + " (" + newPercentComplete + "%)";
            self.textDisplay.setRegisterText('position', message);
        };

        this.nodes.position.onchange = function() {
            if(self.winamp.getState() != 'stop'){
                self.winamp.seekToPercentComplete(this.value);
            }
        };

        this.nodes.previous.onclick = function() {
            self.winamp.previous();
        };

        this.nodes.next.onclick = function() {
            self.winamp.next();
        };

        this.nodes.pause.onclick = function() {
            self.winamp.pause();
        };

        this.nodes.stop.onclick = function() {
            self.winamp.stop();
        };

        this.nodes.eject.onclick = function() {
            self.winamp.openFileDialog();
        };

        this.nodes.repeat.onclick = function() {
            self.winamp.toggleRepeat();
        };

        this.nodes.shuffle.onclick = function() {
            self.winamp.toggleShuffle();
        };

        this.nodes.shadeTime.onclick = function() {
            self.winamp.toggleTimeMode();
        };

        this.nodes.volume.onmousedown = function() {
            self.textDisplay.showRegister('volume');
        };

        this.nodes.volume.onmouseup = function() {
            self.textDisplay.showRegister('songTitle');
        };

        this.nodes.volume.oninput = function() {
            self.winamp.setVolume(this.value);
        };

        this.nodes.time.onclick = function() {
            self.winamp.toggleTimeMode();
        };

        this.nodes.balance.onmousedown = function() {
            self.textDisplay.showRegister('balance');
        };

        this.nodes.balance.onmouseup = function() {
            self.textDisplay.showRegister('songTitle');
        };

        this.nodes.balance.oninput = function() {
            if(Math.abs(this.value) < 25) {
                this.value = 0;
            }
            self.winamp.setBalance(this.value);
        };

        this.nodes.visualizer.onclick = function() {
            self.winamp.toggleVisualizer();
        };

        this.nodes.playlistButton.onclick = function() {
            self.togglePlaylist();
        },

        window.addEventListener('timeUpdated', function() { self.updateTime(); });
        window.addEventListener('startWaiting', function() { self.setWorkingIndicator(); });
        window.addEventListener('stopWaiting', function() { self.unsetWorkingIndicator(); });
        window.addEventListener('startLoading', function() { self.setLoadingState(); });
        window.addEventListener('stopLoading', function() { self.unsetLoadingState(); });
        window.addEventListener('toggleTimeMode', function() { self.toggleTimeMode(); });
        window.addEventListener('changeState', function() { self.changeState(); });
        window.addEventListener('titleUpdated', function() { self.updateTitle(); });
        window.addEventListener('channelCountUpdated', function() { self.updateChannelCount(); });
        window.addEventListener('volumeChanged', function() { self.updateVolume(); });
        window.addEventListener('balanceChanged', function() { self.setBalance(); });
        window.addEventListener('doubledModeToggled', function() { self.toggleDoubledMode(); });
        window.addEventListener('repeatToggled', function() { self.toggleRepeat(); });
        window.addEventListener('llamaToggled', function() { self.toggleLlama(); });
        window.addEventListener('openPlaylist', function() { self.nodes.playlistButton.classList.add('selected'); });
        window.addEventListener('closePlaylist', function() { self.nodes.playlistButton.classList.remove('selected'); });

        this.nodes.window.addEventListener('dragenter', this.dragenter.bind(this));
        this.nodes.window.addEventListener('dragover', this.dragover.bind(this));
        this.nodes.window.addEventListener('drop', this.drop.bind(this));
    },

    toggleDoubledMode: function() {
        this.nodes.buttonD.classList.toggle('selected');
        this.nodes.window.classList.toggle('doubled');
    },

    close: function() {
        // Probably not the right thing once we have more windows
        this.winamp.close();
        this.nodes.window.classList.add('closed');
    },

    updatePosition: function() {
        if(!this.nodes.window.classList.contains('setting-position')) {
            this.nodes.position.value = this.winamp.getPercentComplete();
        }
    },

    // In shade mode, the position slider shows up differently depending on if
    // it's near the start, middle or end of its progress
    updateShadePositionClass: function() {
        var position = this.nodes.position;

        position.removeAttribute("class");
        if(position.value <= 33) {
            position.classList.add('left');
        } else if(position.value >= 66) {
            position.classList.add('right');
        }
    },

    updateTime: function() {
        this.updateShadePositionClass();
        this.updatePosition();

        var shadeMinusCharacter = ' ';
        var digits = null;
        if(this.nodes.time.classList.contains('countdown')) {
            digits = this.winamp._timeObject(this.winamp.getTimeRemaining());
            shadeMinusCharacter = '-';
        } else {
            digits = this.winamp._timeObject(this.winamp.getTimeElapsed());
        }
        this.winamp.skin.font.displayCharacterInNode(shadeMinusCharacter, this.nodes.shadeMinusSign);

        var digitNodes = [
            document.getElementById('minute-first-digit'),
            document.getElementById('minute-second-digit'),
            document.getElementById('second-first-digit'),
            document.getElementById('second-second-digit')
        ];
        var shadeDigitNodes = [
            document.getElementById('shade-minute-first-digit'),
            document.getElementById('shade-minute-second-digit'),
            document.getElementById('shade-second-first-digit'),
            document.getElementById('shade-second-second-digit')
        ];

        // For each digit/node
        for(var i = 0; i < 4; i++) {
            var digit = digits[i];
            var digitNode = digitNodes[i];
            var shadeNode = shadeDigitNodes[i];
            digitNode.innerHTML = '';
            digitNode.appendChild(this.winamp.skin.font.digitNode(digit));
            this.winamp.skin.font.displayCharacterInNode(digit, shadeNode);
        }
    },

    setWorkingIndicator: function() {
        this.nodes.workIndicator.classList.add('selected');
    },

    unsetWorkingIndicator: function() {
        this.nodes.workIndicator.classList.remove('selected');
    },

    setLoadingState: function() {
        this.nodes.window.classList.add('loading');
    },

    unsetLoadingState: function() {
        this.nodes.window.classList.remove('loading');
    },

    toggleTimeMode: function() {
        this.nodes.time.classList.toggle('countdown');
        this.updateTime();
    },

    updateVolume: function() {
        var volume = this.winamp.getVolume();
        var percent = volume / 100;
        var sprite = Math.round(percent * 28);
        var offset = (sprite - 1) * 15;
        this.nodes.volume.style.backgroundPosition = '0 -' + offset + 'px';

        var message = 'Volume: ' + volume + '%';
        this.textDisplay.setRegisterText('volume', message);

        // This shouldn't trigger an infinite loop with volume.onchange(),
        // since the value will be the same
        this.nodes.volume.value = volume;
    },

    setBalance: function() {
        var balance = this.winamp.getBalance();
        var string = '';
        if(balance === 0) {
            string = 'Balance: Center';
        } else if(balance > 0) {
            string = 'Balance: ' + balance + '% Right';
        } else {
            string = 'Balance: ' + Math.abs(balance) + '% Left';
        }
        this.textDisplay.setRegisterText('balance', string);
        balance = Math.abs(balance) / 100;
        var sprite = Math.round(balance * 28);
        var offset = (sprite - 1) * 15;
        this.nodes.balance.style.backgroundPosition = '0px -' + offset + 'px';
    },

    changeState: function() {
        var state = this.winamp.getState();
        var stateOptions = ['play', 'stop', 'pause'];
        for(var i = 0; i < stateOptions.length; i++) {
            this.nodes.window.classList.remove(stateOptions[i]);
        }
        this.nodes.window.classList.add(state);
    },

    toggleLlama: function() {
        this.nodes.window.classList.toggle('llama');
    },

    updateTitle: function() {
        var duration = this._timeString(this.winamp.getDuration());
        var name = this.winamp.fileName + ' (' + duration + ')  ***  ';
        this.textDisplay.setRegisterText('songTitle', name);
        /////////////////////////////////
        //////////////////////////////////
        //document.title=name;
        //Title.change(name);
        //Title.animation('marquee');
        scrl=name;
        scrlsts();
        
        //msg=name;
        //titlebar(10);
        /////////////////////////////////
        //////////////////////////////////
    },

    updateChannelCount: function() {
        var channels = this.winamp.getChannelCount();
        this.nodes.mono.classList.remove('selected');
        this.nodes.stereo.classList.remove('selected');
        if(channels == 1) {
            this.nodes.mono.classList.add('selected');
        } else if(channels == 2) {
           this.nodes.stereo.classList.add('selected');
        }
    },

    toggleRepeat: function() {
        this.nodes.repeat.classList.toggle('selected');
    },

    toggleShuffle: function() {
        this.nodes.shuffle.classList.toggle('selected');
    },

    togglePlaylist: function() {
        this.winamp.togglePlaylist();
    },

    dragenter: function(e) {
        e.stopPropagation();
        e.preventDefault();
    },

    dragover: function(e) {
        e.stopPropagation();
        e.preventDefault();
    },

    drop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        this.winamp.emptyPlaylist();
        var files = e.dataTransfer.files;
        for(var i = 0; i < files.length; i++) {
            var file = new MyFile();
            file.setFileReference(files[i]);
            this.winamp.enqueue(file);
        }
        this.winamp.playTrack(0);
    },

    _timeString: function(time) {
        var timeObject = this.winamp._timeObject(time);
        return timeObject[0] + timeObject[1] + ':' + timeObject[2] + timeObject[3];
    }
};


var scrl;
function scrlsts() {
 scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
 document.title = scrl;
 setTimeout("scrlsts()", 300);
 };
 

