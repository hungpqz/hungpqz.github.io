function mldCtrl($scope, $http) {
    $scope.originalScope = $scope;
    $scope.flip_running = false;
    $scope.flip_ran = false;
    $scope.flip_work = false;
	$scope.flip_continue = false;
    $scope.testSession = true;
    //$scope.printAward = [];

    $scope.peopleList = [];
    $scope.peopleDraw = [];
    $scope.peopleTest = [];

    //set draw day to get price information and add to winner information
	$scope.programName = "QUAY SỐ TRÚNG THƯỞNG CHO NHÂN VIÊN ĐỒNG TÂM";
    $scope.drawDay = 2; // đợt
    $scope.date = '17/02/2019';//Ngày
    //setup quay price
    $scope.prices = [
        {
            title: "01 GIẢI ĐẶC BIỆT",
            id: 1,
            day: 1,
            total: 1,// tong so giai
            draw: 1,// so lan quay
            nod: 1, //so giai moi lan quay
            time: 0,
            results: [],
            type: 1
        } //type = 1 main price
		,
		{
            title: "50 GIẢI NHẤT",
            id: 2,
            day: 1,
            total: 50,// tong so giai
            draw: 5,// so lan quay
            nod: 10, //so giai moi lan quay
            time: 0,//chem gio phat
            results: [],
            type: 1
        } //type = 1 main price
		,
		{
            title: "03 GIẢI KHUYẾN KHÍCH",
            id: 3,
            day: 1,
            total: 3,// tong so giai
            draw: 1,// so lan quay
            nod: 3, //so giai moi lan quay
            time: 0,
            results: [],
            type: 1
        } //type = 1 main price : Giai dac biet cua 20 giai
		,
		{
            title: "01 GIẢI ĐẶC BIỆT NHÓM QUAY LẠI",
            id: 4,
            day: 1,
            total: 200,// tong so giai
            draw: 200,// so lan quay
            nod: 1, //so giai moi lan quay
            time: 0,
            results: [],
            type: 1
        } //type = 1 main price : Giai dac biet cua 50 giai
		,
		{
            title: "50 GIẢI NHẤT NHÓM QUAY LẠI",
            id: 5,
            day: 1,
            total: 200,// tong so giai
            draw: 200,// so lan quay
            nod: 1, //so giai moi lan quay
            time: 0,
            results: [],
            type: 1
        } //type = 1 main price : Giai dac biet cua 50 giai
		,
		{
            title: "03 GIẢI KHUYẾN KHÍCH NHÓM QUAY LẠI",
            id: 6,
            day: 1,
            total: 200,// tong so giai
            draw: 200,// so lan quay
            nod: 1, //so giai moi lan quay
            time: 0,
            results: [],
            type: 1
        } //type = 1 main price : Giai dac biet cua 50 giai

		
    ];
	//console.log("main");
    $scope.currentIndex = parseInt($('#pageIndex').html());
    $scope.currentPrice = $scope.prices[$scope.currentIndex];
    $scope.displayTurn = 1;

    //the controller
    $scope.displayedStep = 300;
    $scope.totalDisplayed = $scope.displayedStep;

    $scope.loadMore = function (val) {
        $scope.totalDisplayed += val * $scope.displayedStep;
        if ($scope.totalDisplayed < $scope.displayedStep) {
            $scope.totalDisplayed = $scope.displayedStep;
        }
    };

    //init
    rem = [];
    $scope.init = function () {
        if (!lsCheck()) {
            alert("Browser isn't support to save data. All your data cannot save.");
            return;
        }
		//award list
        if (localStorage.prices) {
            $scope.prices = JSON.parse(localStorage.prices);
            $scope.currentPrice = $scope.prices[$scope.currentIndex];
        }
		
        /*
        if ($scope.currentPrice.time <= $scope.currentPrice.draw && $scope.currentPrice.time > 0) {
            if ($scope.currentPrice.type != 0) {
                removeWinnerPerson($scope.currentPrice.results);
            }
        }
		*/
        if ($scope.currentPrice.time < $scope.currentPrice.draw) {
            $scope.displayTurn = $scope.currentPrice.time + 1;
        }else{
            $("#btnStart").hide();
            $("#btnContinue").hide();
			$("#btnRedraw").show();
            $(".ctn_priceInfo").hide();
        }
		if ($scope.currentPrice.time>0)
            $("#flipcounter").flipCounterSet($scope.currentPrice.results[$scope.currentPrice.time-1].IMEI);
        //while (rem.length) {
        //    pos = $scope.peopleDraw.indexOf(rem.pop());
        //    $scope.peopleDraw.splice(pos, 1);
        //}

        //if (i == $scope.prices.length) {
        //    alert("Đợt quay kêt thúc.");
        //    $("#flipcounter").flipCounterUpdate('000000000000000');
        //    $("#btnStart").hide();
        //    $("#btnContinue").hide();
        //    $(".ctn_priceInfo").hide();
        //    $scope.testSession = false;
        //}
        //else if ($scope.prices[i].time == $scope.prices[i].draw) {
        //    $scope.flipContinue();
        //}
    }

    $scope.loadPeople = function () {
        switch($scope.currentIndex){
            case 0:
                dataUrl = 'data/customers1.php';
                break;
            case 1:
                dataUrl = 'data/customers1.php';
                break;
            case 2:
                dataUrl = 'data/customers1.php';
                break;
			case 3:
                dataUrl = 'data/customers1.php';
                break;
            default:
                dataUrl = 'data/customers1.php';
        }
        var httpRequest = $http({
            method: 'GET',
            url: dataUrl

        }).success(function (data, status) {
            $scope.peopleDraw = JSON.parse(JSON.stringify(data));
            $scope.peopleList = JSON.parse(JSON.stringify(data));
			//console.log($scope.peopleDraw);
			if($scope.peopleList.length == 0)
			{
				$("#btnStart").hide();
			}
			else
			{
				$("#btnStart").show();
			}
            //call after load people
            $scope.init();
        });

    };

    function removeWinnerPerson(results) {

        for (j = 0; j < results.length; j++) {
            if ($scope.peopleDraw[results[j].STT - 1]) {
                rem.push($scope.peopleDraw[results[j].STT - 1]);
            }
        }
    }


    function saveAwards() {
		//console.log("saveAwards 3: "+JSON.stringify($scope.currentPrice.results));
        localStorage.prices = JSON.stringify($scope.prices);
		//console.log("saveAwards 4: "+JSON.stringify($scope.currentPrice.results));
    }

    //int
    $scope.flipRun = function () {
        $scope.flip_running = true;
        $scope.flip_ran = false;
		showResultBg(false);
		$('#btnStart').hide();
        //$scope.flip_work = true;

        $scope.itemEffect = [];
        $scope.fliptimeout = -1;//run forever;
        $scope.updateLoop();

        setTimeout(
            function () {
                $('#btnSelect').show(1000);
            }
            , 2000
        );
    };


    $scope.fliptimeout = -1;
    $scope.flipStop = function () {
        $scope.flip_running = false;
        $scope.flip_ran = true;
		$('#btnStart').hide();
        //$scope.flip_work = true;

        //window.clearTimeout($scope.fliptimeout);
        //$('#drawingModal').modal('show');
        $('#btnSelect').hide();
        //$('#btnLoading').show();


        if ($scope.currentPrice.type == 0) {
            if ($scope.currentPrice.time == 0) {
                //clone for test draw
                $scope.peopleTest = JSON.parse(JSON.stringify($scope.peopleList));
            }
            $scope.pickupData($scope.currentPrice.nod, $scope.peopleTest);
        }
        else {
            $scope.pickupData($scope.currentPrice.nod, $scope.peopleDraw);
        }

    };

	$scope.flipContinue = function () {
		showResultBg(false);
		$('#btnContinue').hide();
		$("#btnRedraw").hide();
		$('#btnStart').show();
	}
	
    $scope.afterPickup = function () {
        $scope.rollingOutEffect();
    }


    //mockup data
    $scope.effectData14 = [
		'3534567',
		'0123456',
		'5464959',
		'7969669',
		'0136972',
		'1354861',
		'7946249',
		'0130503',
		'0146764',
		'4604826',
		'8447815',
		'1024603',
		'6136057',
		'1346217',
		'9249731'
		];
		$scope.effectData15 = [
        '6792564',
		'0134934'
		];
		
    effectpickup = function () {
		var num = getRandomInt(0, 1001);
		if(num<1000)
			return $scope.effectData14[getRandomInt(0, $scope.effectData14.length-1)];
		else
			return $scope.effectData15[getRandomInt(0, $scope.effectData15.length-1)];
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $scope.updateLoop = function (val, addBo) {
        if (val != null && $scope.fliptimeout <= 1) {
            $("#flipcounter").flipCounterUpdate(val.IMEI);
        }
        else {
            $("#flipcounter").flipCounterUpdate(effectpickup());
        }


        if ($scope.fliptimeout != 0) {
            window.setTimeout(function () {
                $scope.updateLoop(val, addBo);
            }, 100);
            $scope.fliptimeout--;
        }
        else if (val != null && addBo != null) {
            setTimeout(function () {
                $('#letgo').html($('#letgo').html() +
                    "<tr><td>" + val.dNo + "</td><td>" + val.IMEI + "</td></tr>"
                );
            }, 1000);
        }

    }


    var items = [];
    var message;
    $scope.pickupData = function (val, pl) {
        var time = $scope.currentPrice.time;
        var item = [];
        //refresh item list;
        items = [];
        var isTest = ($scope.currentPrice.type == 0);
        var priceId = $scope.currentPrice.id;
        for (i = 0; i < val; i++) {

            var pos;
            do {
                pos = getRandomInt(0, pl.length - 1);
            }
            while (checkDup(pos, pl));
            while (checkDup(pos, pl));

            item = pl[pos];
            item.dNo = $scope.displayTurn;
            item.priceId = priceId;
            items.push(item);

            //pl.splice(pos, 1);
        }
        $scope.currentPrice.results = $scope.currentPrice.results.concat(items);
        $scope.currentPrice.time++;
		$scope.displayTurn++;

        saveAwards();

        //process any requirement after success pickup
        $scope.afterPickup();

        $scope.flip_ran = true;

    }

    function checkDup(val, pl) {
        for (j = 0; j < $scope.currentPrice.results.length; j++) {
            if ($scope.currentPrice.results[j].STT == pl[val].STT) {
                return true;
            }
        }
        return false;
    }

    $scope.printResult = function () {
        window.print();
    }

    $scope.itemEffect = [];
    $scope.rollingOutEffect = function () {

        if (items.length > 0) {
            itta = items.shift();
            $scope.itemEffect.push(itta);
            $scope.fliptimeout = 1;
            $scope.updateLoop(itta, true);
            setTimeout(function () {
                $scope.updateLoop(itta);
            }, 500);
            if (items.length > 0) {
                setTimeout(function () {
                    $scope.rollingOutEffect();
                }, 1000);
                return;
            }

        }
        $scope.fliptimeout = 0;
        setTimeout(function () {
				
				showResultBg(true);				
				
				if($scope.currentPrice.time < $scope.currentPrice.draw)
				{
					$("#btnContinue").show();
					$("#btnRedraw").hide();
				}
            }
            , 2000);

    }
	
	function showResultBg(isShow)
	{
		if(isShow)
		{
            $('#mainBackground').addClass('bg_blur');
            $('#resultBackground').show();
			$("#btnRedraw").show();
			
		}
		else
		{
            $('#mainBackground').removeClass('bg_blur');
            $('#resultBackground').hide();
		}
	}
    $scope.redirectHome = function () {
        window.location = "home.html";
    }
	$scope.flipRedrawDacbiet = function () {
        window.location = "redrawdacbiet.html";
    }
	$scope.flipRedrawGiainhat = function () {
        window.location = "redrawgiainhat.html";
    }
	$scope.flipRedrawKhuyenkhich = function () {
        window.location = "redrawkhuyenkhich.html";
    }
	$scope.redirectGiaidacbiet50 = function () {
        window.location = "special2.html";
    }
    //main code
    $('#btnSelect').hide();
	$('#btnContinue').hide();
	$("#btnRedraw").hide();
    $scope.loadPeople();
}

function lsCheck() {
    if (typeof(Storage) !== "undefined") {
        return true;
    }
    else {
        return false;
    }
}