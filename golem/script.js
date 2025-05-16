window.onload = function () {
    lucide.createIcons();

    let spanDirectoryPath = document.getElementById("spanDirectoryPath");
    let mainWindowBody = document.getElementById("mainWindowBody");
    let signInDialog = document.getElementById("signInDialog");
   
    function openRootDirectory() {
        spanDirectoryPath.innerText = "\\\\server\\remote-pc\\golem\\filesystem\\";
        mainWindowBody.innerHTML = `
            <div id="buttonDiskC" class="menu-item icon-and-text-container">
                    <i data-lucide="folder" class="lucide-folder"></i>
                    <span>
                        C:\\
                    </span>
                </div>
                <div id="buttonDiskD" class="menu-item icon-and-text-container">
                    <i data-lucide="folder-lock"></i>
                    <span>
                        D:\\
                    </span>
                </div>
                <div id="buttonDiskE" class="menu-item icon-and-text-container">
                    <i data-lucide="folder-clock"></i>
                    <span>
                        E:\\
                    </span>
                </div>
        `;
        lucide.createIcons();
        let buttonDiskC = document.getElementById("buttonDiskC");

        buttonDiskC.onclick = function () {
            openDiskCDirectory();
        }

        buttonDiskD.onclick = function () {
            openDiskDDirectory();
        }
    }

    function openDirectory(directoryName, directoryContent) {
        spanDirectoryPath.innerText = directoryName;
        mainWindowBody.innerHTML = directoryContent;
        lucide.createIcons();
    }

    buttonDiskC.onclick = function () {
        openDiskCDirectory();
    }

    buttonDiskD.onclick = function () {
        openDiskDDirectory();
    }

    function openDiskCDirectory() {
        openDirectory("\\\\server\\remote-pc\\golem\\filesystem\\C:\\", `
            <div id="buttonBackToRootDirectory" class="menu-item icon-and-text-container">
                <i data-lucide="folder" class="lucide-folder"></i>
                <span>
                    ..\\
                </span>
            </div>
            <div id="buttonGolemInc" class="menu-item icon-and-text-container">
                <i data-lucide="folder" class="lucide-folder"></i>
                <div class="inlined-container">
                    <span>
                        Golem Inc.
                    </span>
                </div>
            </div>
            <div id="buttonGolemIncPartTwo" class="menu-item icon-and-text-container">
                <i data-lucide="folder" class="lucide-folder"></i>
                <span>
                    Golem Inc. 2
                </span>
            </div>
            <div class="menu-item icon-and-text-container">
                <i data-lucide="folder" class="lucide-folder"></i>
                <div class="inlined-container">
                    <span>
                        Golem Inc. 3
                    </span>
                    <div class="label">
                        <span>
                            Incomplete
                        </span>
                    </div>
                </div>
            </div>
            <div id="buttonOther" class="menu-item icon-and-text-container">
                <i data-lucide="folder" class="lucide-folder"></i>
                <span>
                    Other
                </span>
            </div>
        `);

        let buttonBackToRootDirectory = document.getElementById("buttonBackToRootDirectory");
        let buttonGolemInc = document.getElementById("buttonGolemInc");
        let buttonGolemIncPartTwo = document.getElementById("buttonGolemIncPartTwo");
        let buttonOther = document.getElementById("buttonOther");

        buttonBackToRootDirectory.onclick = function() {
            openRootDirectory();
        }

        buttonGolemInc.onclick = function() {
            openDirectory("\\\\server\\remote-pc\\golem\\filesystem\\C:\\Golem Inc.\\", `
                <div id="buttonBackToDiskC" class="menu-item icon-and-text-container">
                    <i data-lucide="folder" class="lucide-folder"></i>
                    <span>
                        ..\\
                    </span>
                </div>
                <div id="buttonGolemInc" class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <div class="inlined-container">
                        <span>
                            coffee.mp3
                        </span>
                    </div>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <span>
                        vanish.mp3
                    </span>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <span>
                       golem.mp3
                    </span>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <span>
                       club-master.mp3
                    </span>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <span>
                       meow-meow.mp3
                    </span>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="package-2"></i>
                    <span>
                       golem-inc.zip
                    </span>
                </div>
            `);

            let buttonBackToDiskC = document.getElementById("buttonBackToDiskC");

            buttonBackToDiskC.onclick = function() {
                openDiskCDirectory();
            }
        }

        buttonGolemIncPartTwo.onclick = function() {
            openDirectory("\\\\server\\remote-pc\\golem\\filesystem\\C:\\Golem Inc. 2\\", `
                <div id="buttonBackToDiskC" class="menu-item icon-and-text-container">
                    <i data-lucide="folder" class="lucide-folder"></i>
                    <span>
                        ..\\
                    </span>
                </div>
                <div id="buttonGolemInc" class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <div class="inlined-container">
                        <span>
                            robocop.mp3
                        </span>
                    </div>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <span>
                        bulletproof.mp3
                    </span>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <span>
                       hyper-erection.mp3
                    </span>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <span>
                       swagged-out.mp3
                    </span>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <span>
                       honey-donuts.mp3
                    </span>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="package-2"></i>
                    <span>
                       golem-inc-2.zip
                    </span>
                </div>
            `);

            let buttonBackToDiskC = document.getElementById("buttonBackToDiskC");

            buttonBackToDiskC.onclick = function() {
                openDiskCDirectory();
            }
        }

        buttonOther.onclick = function() {
            openDirectory("\\\\server\\remote-pc\\golem\\filesystem\\C:\\Other\\", `
                <div id="buttonBackToDiskC" class="menu-item icon-and-text-container">
                    <i data-lucide="folder" class="lucide-folder"></i>
                    <span>
                        ..\\
                    </span>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <div class="inlined-container">
                        <span>
                            serotonin.mp3
                        </span>
                        <div class="label">
                            <span>
                                Uploaded 16.02.2024 by GOD OF BLOOD
                            </span>
                        </div>
                    </div>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <div class="inlined-container">
                        <span>
                            winter.mp3
                        </span>
                        <div class="label">
                            <span>
                                Uploaded 23.03.2024 by GOD OF BLOOD
                            </span>
                        </div>
                    </div>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <div class="inlined-container">
                        <span>
                            shock.mp3
                        </span>
                        <div class="label">
                            <span>
                                Uploaded 28.03.2024 by GOD OF BLOOD
                            </span>
                        </div>
                    </div>
                </div>
                <div class="menu-item icon-and-text-container">
                    <i data-lucide="audio-lines"></i>
                    <div class="inlined-container">
                        <span>
                            neighbours.mp3
                        </span>
                        <div class="label">
                            <div style="display: flex; justify-content:center;">
                                Uploaded 29.10.2024 by DOBROBOG
                            </div>
                        </div>
                    </div>
                </div>
            `);

            let buttonBackToDiskC = document.getElementById("buttonBackToDiskC");

            buttonBackToDiskC.onclick = function() {
                openDiskCDirectory();
            }
        }
    }

    function openDiskDDirectory() {
    }
}