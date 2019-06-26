function initPotree() {
    /**
     * Potree init
     */
    window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        viewer.setEDLEnabled(false);
        viewer.useHQ = false;
        console.log("skyebrowse", "mobile!");
    }
    else{
        viewer.setEDLEnabled(true);
        viewer.useHQ = true;
        console.log("skyebrowse", "computer!");
    }

    viewer.setFOV(69);
    viewer.setPointBudget(1*1000*1000);
    document.title = "";
    viewer.setBackground("gradient"); // ["skybox", "gradient", "black", "white"];
    viewer.setDescription(``);
    viewer.loadSettingsFromURL();
    viewer.setMinNodeSize(0.69);
    viewer.logMessages = true;

    viewer.loadGUI(() => {
        viewer.setLanguage('en');
        //$("#menu_appearance").next().show();
        $("#menu_tools").next().show();
        //$("#menu_scene").next().show();
        //viewer.toggleSidebar();
    });

    Potree.loadPointCloud("pointclouds/PotreeModel/cloud.js", "PotreeModel", e => {
        let pointcloud = e.pointcloud;
        let material = pointcloud.material;
        material.pointColorType = Potree.PointColorType.RGB; // any Potree.PointColorType.XXXX
        material.size = 1.5;
        material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
        material.shape = Potree.PointShape.CIRCLE;

        viewer.scene.addPointCloud(pointcloud);
        viewer.fitToScreen();
    });
}
$('#toggleButton').hide()
function toggleSidebar () {
    $('#potree_sidebar_container').toggleClass('hiding')
	$('#toggleButton').toggle();
};
$('.toggleButton').attr('src', Potree.resourcePath + '/icons/menu_button.svg');

// very important this order stays
initPotree();