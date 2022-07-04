---
title: Songs
---

This is a special project that makes it able to add songs to the Song Spell!
Make sure to keep the mod/addressable names like `YOURPREFIX_SongPlayer_SONG_SongName`, else the songplayer wont find your song!

## Downloads

* [Song](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_SongPlayer_SONG_SongName.zip)

## How to use

### Quick start

1. Open the project in Unity
1. Open `Assets/Build`.
1. See your weapon addressable folders here!
1. Open `Assets/Resources`.
1. See your song resource folders here!
1. There you go! All needed components.

## Important
Some important things you might need to know while creating mods through base mods.

### Prefixes
In the projects you will find a lot of `YOURPREFIX_ModName_` in names. Those should be changed to your own cool modder tag so your mods will not conflict with others.

To update the prefixes automatically for addressables:
1. Open `Assets/Resources/AddressableConfig`.
1. Change `YOURPREFIX_ModName_` to your desired prefix. (keeping the mod name in the prefix is recommended to reduce conflicting mods).
1. Change the `weaponPaths` to match your addressable folders (found under `Assets/Build`).
1. Press the `Create and Addressable Names` button.

To update the prefixes automatically for scripts, prefabs & paths:
1. Open `Assets/Resources/AddressableConfig`.
1. Click `Modify Prefix In Paths Prefabs And Scripts`.
1. Change Old prefix to `YOURPREFIX_ModName_`.
1. Change New Prefix to your desired prefix. (keeping the mod name in the prefix is recommended to reduce conflicting mods).
1. Press the `Invoke` button.

### Code changes
Only actual CODE change that's needed per project is the following:

In `Assets/Build/Entry.txt` edit `AddStoreItemTemplate("YOURPREFIX_YourModName_Your_Song_Name", nil, "Song name", "A description about the song.")` at the bottom of the script.

### Product name
The product name should be changed manually so that the mod will have it's own name.
1. Go to `Edit/Project Settings/Player/Product Name`.
1. Change `YOURPREFIX_ModName` to your prefix + modname. (No _ at the end)