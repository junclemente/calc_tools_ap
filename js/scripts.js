new Vue({
    el: "#app",
    data: {
        sensorDimension: 0,
        focalLength: 0,
        focalLengthTelescope: 0,
        apertureOfTelescope: 0,
        reducerAperture: 0
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