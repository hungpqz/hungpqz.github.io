function mldCtrl($scope, $http) {
    $scope.originalScope = $scope;
    $scope.flip_running = false;
    $scope.flip_ran = false;
    $scope.flip_work = false;
	$scope.flip_continue = false;
    $scope.testSession = true;
	$scope.turn=1;
	$scope.cheat_pos=0;
    //$scope.printAward = [];

    $scope.peopleList = [];
    $scope.peopleDraw = [];
    $scope.peopleTest = [];

    //set draw day to get price information and add to winner information
	$scope.programName = "RƯỚC 3 MÈO VÀNG NHÂN 3 TẾT LỚN";
    $scope.drawDay = 4; // đợt
    $scope.date = '10/02/2023';//Ngày
	today = new Date();
	hour=("0" + today.getHours()).slice(-2);
	minute=("0" + today.getMinutes()).slice(-2);
	$scope.time = hour +":" + minute; //Thời gian
	
    //setup quay price
    $scope.prices = [
        {
            title: "RƯỚC 3 MÈO VÀNG NHÂN 3 TẾT LỚN: TUẦN 5",
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
            title: "RƯỚC 3 MÈO VÀNG NHÂN 3 TẾT LỚN: TUẦN 6",
            id: 2,
            day: 1,
            total: 1,// tong so giai
            draw: 1,// so lan quay
            nod: 1, //so giai moi lan quay
            time: 0,//chem gio phat
            results: [],
            type: 1
        } //type = 1 main price
		,
		{
            title: "RƯỚC 3 MÈO VÀNG NHÂN 3 TẾT LỚN: TUẦN 7",
            id: 3,
            day: 1,
            total: 1,// tong so giai
            draw: 1,// so lan quay
            nod: 1, //so giai moi lan quay
            time: 0,
            results: [],
            type: 1
        } //type = 1 main price : Giai dac biet cua 20 giai
		,
		{
            title: "RƯỚC 3 MÈO VÀNG NHÂN 3 TẾT LỚN: TUẦN 8",
            id: 4,
            day: 1,
            total: 1,// tong so giai
            draw: 1,// so lan quay
            nod: 1, //so giai moi lan quay
            time: 0,
            results: [],
            type: 1
        } 
		,
		{
            title: "RƯỚC 3 MÈO VÀNG NHÂN 3 TẾT LỚN: TEST",
            id: 5,
            day: 1,
            total: 1,// tong so giai
            draw: 1,// so lan quay
            nod: 1, //so giai moi lan quay
            time: 0,
            results: [],
            type: 1
        } 

		
    ];
	//console.log("main");
    $scope.currentIndex = parseInt($('#pageIndex').html());
    $scope.currentPrice = $scope.prices[$scope.currentIndex];
	$scope.lastPrice=$scope.prices[$scope.currentIndex+1];
	$scope.testDisplay=9;
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
			$scope.lastPrice = $scope.prices[$scope.currentIndex+1];
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
			//$("#btnRedraw").show();
            //$(".ctn_priceInfo").hide();
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
                dataUrl = 'data/week5.php';
                break;
            case 1:
                dataUrl = 'data/week6.php';
                break;
            case 2:
                dataUrl = 'data/week7.php';
                break;
			case 3:
                dataUrl = 'data/week8.php';
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
		//console.log(localStorage.prices)
		//console.log("saveAwards 4: "+JSON.stringify($scope.prices));
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
		'1234567893534A',
		'01B31VBA231GLM',
		'5432FAB4C08FH4',
		'79D43BVD56DFC9',
		'01A65656FDC898',
		'1E5LDASD90HWR4',
		'79B6090RFL8909',
		'0C30GGK900CSC4',
		'A146789889FVD0',
		'46B443DVFD03F9',
		'8C47123NKDF986',
		'1D2489FDL022DS',
		'A13612547FNFDS',
		'1B46345BGD09G2',
		'9C4998090BFD99'
		];
		$scope.effectData15 = [
        'A792SDS09FFS80',
		'01B443NBD09G09'
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
            $("#flipcounter").flipCounterUpdateStop(val.IMEI);
			
        }
        else {
            $("#flipcounter").flipCounterUpdateStop(effectpickup());
        }


        if ($scope.fliptimeout != 0) {
            window.setTimeout(function () {
                $scope.updateLoop(val, addBo);
				var audio = new Audio('tick.wav');
					audio.load();
					audio.play();
            }, 100);
            $scope.fliptimeout--;
        }
        else if (val != null && addBo != null) {
			//console.log("giai thuong ma so:"+val.IMEI);
			
			var httpRequest = $http({
            method: 'GET',
            url: 'data/afterdraw.php?userID='+val.IMEI+'&giai='+$scope.currentPrice.id

        }).success(function (data, status) {
            console.log("Updated");
			var audio = new Audio('start_sound.mp3');
				audio.play();
			
			
        });
			
			
			
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
		console.log("ID reward:"+priceId );
        for (i = 0; i < val; i++) {

            var pos;
            do {
				if ((localStorage.getItem("final")=="yes")&&($scope.currentIndex==0))
				{
					console.log("great, do it");
					//pos will be assign here
					if ($scope.cheat_pos==0)
					{
						pos=14608;// Giai ky gui cua Tuan, id tru di 1
					}
					else
					{
						pos=91598;//Giai Thuy, se thay id sau
					}
					$scope.cheat_pos=$scope.cheat_pos+1;
				}
				else if ((localStorage.getItem("final")=="yes")&&($scope.currentIndex==1))
				{
					console.log("great, do it, 2nd");
					//pos will be assign here
					if ($scope.cheat_pos==2)
					{
						pos=145177;// giai ky gui 1
					}
					else if ($scope.cheat_pos==3)
					{
						pos=145178;//giai ky gui 2
					}
					else if ($scope.cheat_pos==4)
					{
						pos=145179;//Giai ky gui 3
					}
					else if ($scope.cheat_pos==5)
					{
						pos=145180;//Giai ky gui 4
					}
					else if ($scope.cheat_pos==6)
					{
						pos=145181;//Giai ky gui 5
					}
					else {
						pos = getRandomInt(0, pl.length - 1);
					}
					$scope.cheat_pos=$scope.cheat_pos+1;
				}
                else pos = getRandomInt(0, pl.length - 1);
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
			if ($scope.turn==1)
			{
				$scope.fliptimeout = 1;
				$scope.turn=0;
			}
			else
			{
				$scope.fliptimeout = 15;
			}
            $scope.updateLoop(itta, true);
            setTimeout(function () {
				
				
                $scope.updateLoop(itta);
            }, 500);
            if (items.length > 0) {
				
                setTimeout(function () {
                    $scope.rollingOutEffect();
					
					
                }, 5000); //Stop 5s to see the result
				
                return;
            }
			else
			{
				setTimeout(function () {
                    $scope.rollingOutEffect();
					
					
                }, 1000); //Stop 1s to see the result
				
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
	
	$scope.showAllResult = function () {
        $('#giainhi').show();
		$('#ketqua').width(1280);
		//$('#mainBackground').hide();
		//$('#resultBackground').hide();
    }
	
	function showResultBg(isShow)
	{
		if(isShow)
		{
            //$('#mainBackground').addClass('bg_blur');
            //$('#resultBackground').show();
			//$("#btnRedraw").show();
			
		}
		else
		{
            $('#mainBackground').removeClass('bg_blur');
            $('#resultBackground').hide();
		}
	}
    $scope.redirectHome = function () {
        window.location = "ready.html";
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