$(document).ready(function () {

    let btn = $('#myButton')

    btn.on('click', function () {
        let firstRow = $('#1')
        firstRow.fadeOut(2000, function () {
            firstRow.remove()
        })
    })

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
        if (data.next) {
            showChars(data.results)
            getData(data.next, getNext)
        }
    }

    function showChars(data) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log(element.name)
        }
    }

    getData("https://swapi.co/api/people/", getNext)
})