# Lt Ouroumov's Worm CYOA V6 Fork

Fork of the Worm CYOA V6 by PixelGMS

* [Version 6.0](https://interactivewormcyoav6.neocities.org/WormCYOAV6/WormCYOAV6.html)
* [Version 6.1](https://interactivewormcyoav6.neocities.org/WormCYOAV6.1/Worm.html)

<center><h3><a href="https://ltouroumov.github.io/worm-cyoa-v6-fork/viewer/">View Here</a></h3></center>

## TODO List

_Empty_

# CYOA tools

Set of tools to manipulate the project.json file

```shell
# Show all available commands
./cyoa.sh -h

# Format the project file
./cyoa.sh project.format --project project-v15.json

# List all rows
./cyoa.sh row.list --project project-v15.json

# List all objects in a row
./cyoa.sh object.list --project project-v15.json --row-id io2d

# Object modification tools
./cyoa.sh object.copy
./cyoa.sh object.cut
./cyoa.sh object.move
./cyoa.sh object.add
```