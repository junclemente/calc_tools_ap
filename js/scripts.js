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
            return (( 3436 * this.sensorDimension) / this.focalLength);
        },
        focalLengthReducer: function() {
            return (( this.focalLengthTelescope * this.reducerAperture) / this.apertureOfTelescope);
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