# YouTube Iframe Timestamps Plugin for Obsidian

This Obsidian plugin allows you to embed YouTube videos with timestamps directly in your notes, enabling seamless referencing and note-taking without needing to open a separate browser window.

---

## Features

 • Automatically embeds YouTube videos with timestamps in an iframe inside Obsidian.
 • Quickly jump to specific video timestamps by clicking on the YouTube links.
 • Helps you stay focused while taking notes, especially for video-heavy workflows.

---
## Prerequisites: 
### Limitations
As of right now, Iframes only show up in the Reading View when the Default Editing mode is set to Source mode. Enable this by going to `Settings -> Editor -> Default editing mode` and Setting it to `Source mode` 
---
## Installation

To install this plugin:

 1. Download the latest release (the main.js and manifest.json )files from https://github.com/NilsLeo/obsidian-youtube-iframe-timestamps/releases and place them in an empty folder
 2. Copy the folder to them to your Obsidian vault under the `./.obsidian/plugins` directory.
 3. Restart Obsidian or reload the plugins under Settings → Community Plugins.
 4. Enable the plugin by going to Settings → Community Plugins, and toggle on the “YouTube Iframe Timestamps” plugin.

Alternatively, when available in the Community Plugin marketplace, you can install directly from there.

---

## Usage

Embedding YouTube Videos with Timestamps

To use this plugin, create a note with YouTube links that include timestamps. You will also need an empty <div> with the id of video-player, which acts as the container for the embedded YouTube iframe.

### Viewing Timestamps
Here’s an example markdown note that uses YouTube links with timestamps:



```markdown
<div id="video-player" class="video-player"></div>

## Video 1
https://youtu.be/PjDw3azfZWI?t=644
https://youtu.be/PjDw3azfZWI?t=643

## Video 2
https://youtu.be/przDcQe6n5o?t=1

## Footnote

Let's reference a video using a footnote[^1].

[^1]: https://youtu.be/N7N4EC20-cM?t=279

```

Once the note is created, right-click on any YouTube link and select “Open Timestamp on Iframe.” The video will be loaded inside the iframe at the specified timestamp.

![Demo](<CleanShot 2024-10-03 at 16.31.52.gif>)


### Adding Timestamps to YouTube Links

To add a timestamp to a YouTube link:

 1. Navigate to the desired time in the YouTube video.
 2. Right-click on the video player and select Copy video URL at the current time.
 3. Paste the link into your Obsidian note.

This will allow you to jump to the specific time in the video directly from Obsidian.
![Demo2](<CleanShot 2024-10-03 at 16.55.45.gif>)

--- 

## Development Setup

If you are interested in contributing or tweaking this plugin:

 1. Clone the repository.
 2. Run npm install to install dependencies.
 3. Use npm run dev to start development mode.
 4. For production builds, run npm run build.


---

## Attribution

https://github.com/gajus/youtube-player - This package facilitated the integration of the YouTube iframe API
