//Set global array proxy links to solve CORS errors
var proxy = {
    0: 'https://bird.ioliu.cn/v1?url=',
};
//Set global pagenum and random
var pnum = 1;
var rand = Math.floor(Math.random() * Object.keys(proxy).length);
$(document).ready(function() {
    //Variable zone
    var initlink = $('#selectapi').val();
    //Toggle menu and adjust size
    $(".toggle").css({ 'left': $('#left').width() - 50 });
    $('.toggle').click(function() {
        $('#left').toggle();
        if ($('#left').is(':visible')) {
            $('.toggle').css({ 'left': $('#left').width() - 50 });
        } else {
            $('.toggle').css({ 'left': '5px' });
        }
    });
    //Initial homepage menu and episod lists
    iniMenu(initlink);
    //Select Different Source Website
    $('#selectapi').on('change', function() {
        var key = $(this).val();
        $('.itemContainer').empty();
        iniMenu(key);
        pnum = 1;
    });
    //Reinitial page num
    $("#menu").click(function() {
        pnum = 1;
    });
    //Scroll down to load more
    $(window).scroll(function(e) {
        $('#left').hide();
        $('.toggle').css({ 'left': '5px' });
        var ks = $('.hiddens');
        var kt = $('#search');
        var str = ks[0].children[0].innerHTML;
        var sts = kt[0].value;
        var scrollTop = $(this).scrollTop(),
            scrollHeight = $(document).height(),
            windowHeight = $(this).height();
        var positionValue = (scrollTop + windowHeight) - scrollHeight;
        var link = $('#selectapi').val();
        var globallink
        if (positionValue == 0) {
            $('#root').append(`<div class="loadingimg"><img src="../images/loading.gif" tag="Easy Web TV"></div>`);
            pnum++;
            if (sts.length > 0) {
                globallink = proxy[rand] + `${link}&wd=${sts}&pg=${pnum}`;
            } else {
                globallink = proxy[rand] + `${link}&t=${str}&pg=${pnum}`;
            }
            $.getJSON(globallink, function(data) {
                var test = data.data;
                var count = data.pagecount
                if (pnum <= count) {
                    $('.loadingimg').remove();
                    if ($(window).width() > 1024) {
                        $(`.itemContainer:eq(4)`).hide();
                        for (let i = 0; i < test.length; i++) {
                            pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                            if (i % 4 == 0) {
                                $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 4 == 1) {
                                $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 4 == 2) {
                                $(`.itemContainer:eq(2)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 4 == 3) {
                                $(`.itemContainer:eq(3)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            }
                        }
                    } else if ($(window).width() <= 1024 && $(window).width() > 640) {
                        $(`.itemContainer:eq(3)`).hide();
                        $(`.itemContainer:eq(4)`).hide();
                        for (let i = 0; i < test.length; i++) {
                            pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                            if (i % 3 == 0) {
                                $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 3 == 1) {
                                $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 3 == 2) {
                                $(`.itemContainer:eq(2)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            }
                        }
                    } else if ($(window).width() <= 640) {
                        $(`.itemContainer:eq(2)`).hide();
                        $(`.itemContainer:eq(3)`).hide();
                        $(`.itemContainer:eq(4)`).hide();
                        for (let i = 0; i < test.length; i++) {
                            pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                            if (i % 2 == 0) {
                                $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 2 == 1) {
                                $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            }
                        }
                    }
                } else {
                    $('.loadingimg').remove();
                    alert(`There is nothing to load`);
                }
            });
        }
    });
    let menuHeight = document.getElementById('menu');
    let screenHeight = window.innerHeight;
    menuHeight.style.height = screenHeight - 60 + 'px';
    $("#menu").css({
        "overflow-y": "auto",
        "height": menuHeight
    });
});

//Initial homepage menu
function iniMenu(link) {
    let menu = $.getJSON(proxy[rand] + `${link}`);
    $('#root').append(`<div class="loadingimg"><img src="../images/loading.gif" tag="Easy Web TV"></div>`);
    $.when(menu).done(function(data) {
        $("#menu").empty();
        var lef = data['class'];
        var test = data['data'];
        $("#menu").append('<li style="background-color:#fff"><input id="search" type="text" placeholder="Search..." /></li>');
        $("#menu").append(`<li><p><span class="0">最近更新</span></p></li>`);
        for (let i of lef) {
            $("#menu").append(`<li><p><span class="${i.cid}">${i.title}</span></p></li>`);
        };
        $('.loadingimg').remove();
        if ($(window).width() > 1024) {
            $(`.itemContainer:eq(4)`).hide();
            for (let i = 0; i < test.length; i++) {
                pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                if (i % 4 == 0) {
                    $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                } else if (i % 4 == 1) {
                    $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                } else if (i % 4 == 2) {
                    $(`.itemContainer:eq(2)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                } else if (i % 4 == 3) {
                    $(`.itemContainer:eq(3)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                }
            };
        } else if ($(window).width() <= 1024 && $(window).width() > 640) {
            $(`.itemContainer:eq(3)`).hide();
            $(`.itemContainer:eq(4)`).hide();
            for (let i = 0; i < test.length; i++) {
                pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                if (i % 3 == 0) {
                    $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                } else if (i % 3 == 1) {
                    $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                } else if (i % 3 == 2) {
                    $(`.itemContainer:eq(2)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                }
            };
        } else if ($(window).width() <= 640) {
            $(`.itemContainer:eq(2)`).hide();
            $(`.itemContainer:eq(3)`).hide();
            $(`.itemContainer:eq(4)`).hide();
            for (let i = 0; i < $test.length; i++) {
                pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                if (i % 2 == 0) {
                    $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                } else if (i % 2 == 1) {
                    $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                }
            }
        }
    }).done(function() {
        var searchlink = '';
        $("#search").on('keyup', function(e) {
            if (e.which == 13) {
                //Search Items
                var valThis = $(this).val().toLowerCase();
                if (link == '123') {
                    alert('xxx not support search');
                } else {
                    searchlink = proxy[rand] + `${link}&wd=${valThis}`;
                }
                $.getJSON(searchlink, function(data) {
                    var test = data['data'];
                    $('.itemContainer').empty();
                    if ($(window).width() > 1024) {
                        $(`.itemContainer:eq(4)`).hide();
                        for (let i = 0; i < test.length; i++) {
                            pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                            if (i % 4 == 0) {
                                $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 4 == 1) {
                                $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 4 == 2) {
                                $(`.itemContainer:eq(2)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 4 == 3) {
                                $(`.itemContainer:eq(3)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            }
                        }
                    } else if ($(window).width() <= 1024 && $(window).width() > 640) {
                        $(`.itemContainer:eq(3)`).hide();
                        $(`.itemContainer:eq(4)`).hide();
                        for (let i = 0; i < test.length; i++) {
                            pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                            if (i % 3 == 0) {
                                $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 3 == 1) {
                                $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 3 == 2) {
                                $(`.itemContainer:eq(2)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            }
                        }
                    } else if ($(window).width() <= 640) {
                        $(`.itemContainer:eq(2)`).hide();
                        $(`.itemContainer:eq(3)`).hide();
                        $(`.itemContainer:eq(4)`).hide();
                        for (let i = 0; i < test.length; i++) {
                            pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                            if (i % 2 == 0) {
                                $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            } else if (i % 2 == 1) {
                                $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                            }
                        }
                    }
                });
            }
        });
    });
    //Click to choose category
    $('#menu').on("click", "span", function(e) {
        let className = e.originalEvent.target.className;
        $('.hiddens').empty();
        $('.hiddens').append(`<p>${className}</p>`);
        $('#search').val('');
        $.getJSON(proxy[rand] + `${link}&t=${className}`, function(data) {
            var test = data['data'];
            $('.itemContainer').empty();
            if ($(window).width() > 1024) {
                $(`.itemContainer:eq(4)`).hide();
                for (let i = 0; i < test.length; i++) {
                    pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                    if (i % 4 == 0) {
                        $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                    } else if (i % 4 == 1) {
                        $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                    } else if (i % 4 == 2) {
                        $(`.itemContainer:eq(2)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                    } else if (i % 4 == 3) {
                        $(`.itemContainer:eq(3)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                    }
                }
            } else if ($(window).width() <= 1024 && $(window).width() > 640) {
                $(`.itemContainer:eq(3)`).hide();
                $(`.itemContainer:eq(4)`).hide();
                for (let i = 0; i < test.length; i++) {
                    pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                    if (i % 3 == 0) {
                        $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                    } else if (i % 3 == 1) {
                        $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                    } else if (i % 3 == 2) {
                        $(`.itemContainer:eq(2)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                    }
                }
            } else if ($(window).width() <= 640) {
                $(`.itemContainer:eq(2)`).hide();
                $(`.itemContainer:eq(3)`).hide();
                $(`.itemContainer:eq(4)`).hide();
                for (let i = 0; i < test.length; i++) {
                    pic = test[i].vod_pic.length == 0 ? '../images/noimage.jpeg' : test[i].vod_pic;
                    if (i % 2 == 0) {
                        $(`.itemContainer:eq(0)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                    } else if (i % 2 == 1) {
                        $(`.itemContainer:eq(1)`).append(`<a href="../catalogues/adultplay.html?web=${link}&ids=${test[i].vod_id}"><div class="item"><img class="itemImg" src="${pic}" alt="${test[i].vod_title}" /><div class="userInfo"><img class="avatar" src="../images/player.jpg" alt="" /><span class="username">[${test[i].category}]${test[i].vod_title}</span></div></div></a>`)
                    }
                }
            }
        });
    });
};