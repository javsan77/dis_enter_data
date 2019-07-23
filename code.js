    // It doesn't permit enter data to inputs of class input_dis
    $("input.input_dis").on("keypress keyup blur",function (event) {
        return false;
    });
