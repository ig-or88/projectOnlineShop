$(function(){
  $('.banner-section__slider').slick({
    dots:true,
    prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false
        } //при разрешении 969, стрелки исчезают
      }
    ],
  });


  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });


  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active')
  });


  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:'<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
    nextArrow:'<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
  });

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200);
  });

  //--------------------------
  // $(".js-range-slider").ionRangeSlider({
  //   type: "double",
  //   min: 100000,
  //   max: 5000000,
  // });
  //--------------------


  var $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min = 0,
      max = 2000000,
      from = 0,
      to = 0;

  $range.ionRangeSlider({
  	skin: "round",
      type: "double",
      min: min,
      max: max,
      from: 100000,
      to: 500000,
      onStart: updateInputs,
      onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs (data) {
  	from = data.from;
      to = data.to;

      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < min) {
          val = min;
      } else if (val > to) {
          val = to;
      }

      instance.update({
          from: val
      });
  });

  $inputTo.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < from) {
          val = from;
      } else if (val > max) {
          val = max;
      }

      instance.update({
          to: val
      });

  });

  $('.catalog__filter-btngrid').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__filter-btnline').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });


  $(".rate-yo").rateYo({
    normalFill: "#C4C4C4",
    ratedFill: "#1C62CD",
    spacing: "7px",
  });

  $('.menu__btn').on('click', function(){
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
  });


});


/*
Метод .siblings() позволяет получить все элементы находящиеся на одном уровне вложенности (смежные элементы) с указанным элементом, дополнительно они могут фильтроваться с помощью заданного селектора.
Метод .preventDefault() объекта Event отменяет действие события по умолчанию. Если этот метод вызывается, то действие события по умолчанию не будет срабатывать.
.toggleClass() добавляет или удаляет один, или несколько классов каждому выбранному элементу. Этот метод проверяет каждый элемент на наличие указанного имени класса и добавляет этот класс, или классы, если они отсутствуют, либо удаляет класс, или классы, если они установлены у элемента (метод переключения классов).

  $('.slider_inner').slick(); - подключение библиотеки slick

  nextArrow: '<button type="button" class="slick-btn slick-next">1</button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev">2</button>',
  выяснить почему запятая, а не ;

  infinite:false - отключает зацикливание
*/
