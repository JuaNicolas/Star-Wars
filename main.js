$(document).ready(function () {


  // var request = $.ajax({
  //     url: "https://swapi.co/api/people/",
  //     method: "GET"
  // })

  // request.done(function (data) {
  //     console.log('Respuesta: ', data)
  //     $.ajax({
  //         url: data.next,
  //         method: "GET"
  //     })
  // })

  // request.fail(function (error) {
  //     console.log('Error: ', error)
  // })

  // function getData(url, cbk) {
  //     $.ajax(url)
  //         .done(function (data) {
  //             cbk(null, data)
  //         })
  //         .fail(function (error) {
  //             cbk(error)
  //         })
  // }

  // function cbk(error, data) {
  //     if (error) {
  //         console.log(error)
  //     }
  //     console.log(data)
  //     for (const key in data) {
  //         const element = data[key];
  //         console.log(element)
  //     }
  // }

  // getData("https://swapi.co/api/people/5/", cbk)

  function getData(url, getNext) {
    $.ajax(url)
      .done(function (data) {
        getNext(data, showChars)
      })
      .fail(function (error) {
        console.log(error)
      })
  }

  function getNext(data, showChars) {
    if (data.results) {
      showChars(data.results)
      getData(data.next, getNext)
    }
  }

  function showChars(data) {
    let tableBody = $('#tableBody')



    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      let char = $('<tr/>')
      let charId = $('<td>').text(`${index}`)
      let charName = $('<td>').text(`${element.name}`)
      let charGender = $('<td>').text(`${element.gender}`)
      let charHeight = $('<td>').text(`${element.height} cm`)
      let charMass = $('<td>').text(`${element.mass} kg`)
      let charEyes = $('<td>').text(`${element.eye_color}`)
      let charDelete = $('<td>').append($('<button>').text('Eliminar').addClass('btn btn-danger').attr('type', 'button'))

      // <td style="padding:0"><button id="myButton" type="button" class="btn btn-danger">Eliminar</button></td>


      char.append(charId)
        .append(charName)
        .append(charGender)
        .append(charHeight)
        .append(charMass)
        .append(charEyes)
        .append(charDelete)
      tableBody.append(char)
    }
  }
  
  getData("https://swapi.co/api/people/", getNext)
  



})