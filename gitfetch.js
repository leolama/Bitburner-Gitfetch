//leolama#2190 on Discord if you need help
/** @param {NS} ns **/
export async function main(ns) {
	var baseURL = "https://raw.githubusercontent.com/"; //keep this the same
	var owner = "user/"; //change this to your username
	var repo = "repository/"; //change this to the repository name
	var branch = "main/"; //probably keep this the same

	//change these to the files you want to get
	var files = [
		"file.js",
		"folder/other-file.js",
		"yet-another-file.js"
	];

	if (await ns.prompt("This will overrite all files specified in gitfetch.js, do you want to continue?")) {
		for (let i = 0; i < files.length; ++i) {
			if (await ns.wget(baseURL + owner + repo + branch + files[i], "/" + files[i])) {
				ns.tprint("Got " + baseURL + owner + repo + branch + files[i] + " to /" + files[i]);
				await ns.sleep(100)
			}
			else {
				ns.tprint("Failed to get " + files[i]);
			}
		}
	}
	ns.tprint("finished!");
}