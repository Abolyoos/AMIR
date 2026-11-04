// JavaScript: Hantering av kameraströmmens länk och felsökning
    const streamImage = document.getElementById('stream');
    const streamUrl = "http://192.168.0.247:81/stream";

    function reloadStream() {
      // Lägger till en tidsstämpel för att tvinga webbläsaren att ladda om strömmen om den stannar
      streamImage.src = streamUrl + "?t=" + new Date().getTime();
    }

    // Om bildlänken skulle misslyckas (t.ex. om port 81 inte används), testa bas-IPn
    streamImage.onerror = function() {
      console.warn("Kunde inte ansluta till port 81, försöker direkt mot IP...");
      // Om du laddade upp koden utan :81/stream ändras sökvägen automatiskt
      if (streamImage.src.includes(":81/stream")) {
        streamImage.src = "http://192.168.0.247";
      }
    };