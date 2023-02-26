# Contributing to the CYOA
(Adapted from SYM-BOL's guide)

## A. Fork the project

The first strep to a contributions are to obtain the latest version of the project from this repository. To do this, you will need a GitHub account (https://github.com/signup) and the GitHub Desktop application (https://desktop.github.com/).

Once you arrive on the home screen (image below), you can return to the site.

![GitHub Desktop](./_images/contrib_2.png)

Download the repository by pressing the "Code" button then choosing "Open with GitHub Desktop"

![GitHub](./_images/contrib_1.png)

The GH Desktop application will appear with the following screen, you can choose where the files will be downloaded, or keep the proposed directory, then press the "clone" button.

![GitHub Desktop](./_images/contrib_3.png)

This can take up to a few minutes since there is a lot of history and files to download. (The entire repository is ~2.5Gb of data.)

![GitHub Desktop](./_images/contrib_4.png)

Once the download is over, you will see the repository inside of the GH Desktop application. Since you haven't made any changes yet, there shouldn't be anything there.

![GitHub Desktop](./_images/contrib_5.png)

## B. Edit the project

To edit the CYOA, you should use the online editor created my MeanDelay

https://intcyoacreator.onrender.com/

![CYOA Creator](./_images/contrib_6.png)

You can open the project file by selecting "Open Image-CYOA Creator" then the "Save/Load Project" button from the left bar (the floppy icon)

![CYOA Creator](./_images/contrib_8.png)

It will open the "Save/Load" window and you can press "Select your project" and go to where the files were downloaded. Select the project you want to load (`project-v17.json` for example).

![CYOA Creator](./_images/contrib_7.png)

When you press open, the window will change and the CYOA will be loaded into the editor.

![CYOA Creator](./_images/contrib_9.png)

From there, you can modify the CYOA to your heart's contents.

Once you have added what you want to the file, you can open the "Save/Load" window again and press the "Save Project" button.

**⚠ Warning ⚠**<br/>
DO NOT press the "Download Finished Project [...]" button, it will remove the images from the downloaded project file. There are some scripts that handle the images.

## C. Integrate your changes into the project

The project uses a suite of Python tools to make the process of handling images less painful. You need to run those scripts befor you can submit your changes.

**NOTE:** You don't need to know Python to use the tools, the process is completely automated for you.

The first step is to download and install the Python Programming language from the official website: https://www.python.org/downloads/

![CYOA Creator](./_images/contrib_11.png)

The installation is fully automated and will set things up so the CYOA project can make use of it.



## D. Make a Pull Request

Once you have downloaded the project file, it will be in your "Downloads" folder with a name like `project.json` or `project (23).json`. 

Copy this file into the repository folder. Then delete the old project file (`project-v17.json`) and rename your new file to take its place.

![CYOA Creator](./_images/contrib_10.png)

If you have done everything correctly, the GitHub Desktop application should show that you have modified the `project-v17.json` file.