new Vue({
    el: "#app",
    data: {
        sensorDimension: 0,
        focalLength: 0,
        focalLengthTelescope: 0,
        apertureOfTelescope: 0,
        reducerAperture: 0,
        pixelSize: 0,
        focalLengthOfTelescope2: 0
    },
    computed: {
        fieldOfView: function() {
            if ((this.sensorDimension == 0 || isNaN(this.sensorDimension)) ||
                (this.focalLength == 0 || isNaN(this.focalLength))) {
                    return 0;
                } else {
                    return (( 3436 * this.sensorDimension) / this.focalLength).toFixed(1);
                }
        },
        focalLengthReducer: function() {
            if ((this.focalLengthTelescope == 0 || isNaN(this.focalLengthTelescope)) ||
                (this.reducerAperture == 0 || isNaN(this.reducerAperture)) ||
                (this.apertureOfTelescope == 0 || isNaN(this.apertureOfTelescope))) {
                    return 0;
            } else {
                    return (( this.focalLengthTelescope * this.reducerAperture) / this.apertureOfTelescope);
            }
        },
        imageResolution: function() {
            if ((this.pixelSize == 0 || isNaN(this.pixelSize)) ||
                (this.focalLengthOfTelescope2 == 0 || isNaN(this.focalLengthOfTelescope2))) {
                    return 0;
                } else {
                    return (( 206 * this.pixelSize) / this.focalLengthOfTelescope2);
            }
        }
    }
    //     showFov: function() {
    //         console.log(isNaN(this.sensorDimension));
    //         console.log(isNaN(this.focalLength));

    //         if ( isNaN(this.sensorDimension) && isNaN(this.focalLength) ) {
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     }
    // }
});