import { Plugin } from "obsidian";
import YouTubePlayer from "youtube-player";
export default class YoutubeIframeTimestamps extends Plugin {
	async onload() {
		console.log("loading plugin");
		this.registerEvent(
			this.app.workspace.on("url-menu", (menu, url) => {
				menu.addItem((item) => {
					item.setTitle("Open Timestamp on Iframe")
						.setIcon("video")
						.onClick(async () => {
							this.showIFrame(url);
						});
				});
			})
		);
		this.registerEvent(
			this.app.workspace.on("active-leaf-change", () => {
				this.player.destroy();
				this.player = null;
			})
		);
	}

	onunload() {
						this.player.destroy();
						this.player = null;
		console.log("unloading plugin");
	}

	player: any = null;

	showIFrame(url: string) {
		const youtubeID = this.getYouTubeID(url); // Get the YouTube ID
		const timeStamp = this.getYouTubeTimestamp(url); // Get the YouTube timestamp
		if (!this.player) {
			this.player = YouTubePlayer("video-player");
		}
		this.player.loadVideoById(youtubeID, timeStamp || 0);
		this.player.playVideo();
	}

	getYouTubeTimestamp(url: string) {
		// Regular expression to match YouTube timestamp
		const regex = /(?:[?&]t=|#t=)(?:(\d+)h)?(?:(\d+)m)?(\d+)s?/;
		const match = url.match(regex);

		if (match) {
			const hours = match[1] ? parseInt(match[1], 10) : 0;
			const minutes = match[2] ? parseInt(match[2], 10) : 0;
			const seconds = match[3] ? parseInt(match[3], 10) : 0;
			const totalSeconds = hours * 3600 + minutes * 60 + seconds;

			return totalSeconds; // Return the total seconds
		} else {
			console.log("No valid YouTube timestamp found.");
			return null; // Return null if no timestamp found
		}
	}

	getYouTubeID(url: string): string | null {
		const regex =
			/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
		const match = url.match(regex);

		if (match && match[1]) {
			return match[1]; // Return the video ID
		} else {
			console.log("No valid YouTube ID found.");
			return null; // Return null if no ID found
		}
	}
}
