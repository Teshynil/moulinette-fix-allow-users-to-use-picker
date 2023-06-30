Hooks.once("ready", async function () {

class MoulinetteFilePickerFixed extends game.moulinette.applications.MoulinetteFilePicker {
    async browse(target, options={}) {
        let oldPermissions=game.user.permissions;
        game.user.permissions={"FILES_BROWSE":true};
        super.browse(target,options);
        game.user.permissions=oldPermissions;
    }
}
setTimeout(()=>{
    console.log("MoulinetteFilePickerFix");
    FilePicker = MoulinetteFilePickerFixed;
},3000);
});