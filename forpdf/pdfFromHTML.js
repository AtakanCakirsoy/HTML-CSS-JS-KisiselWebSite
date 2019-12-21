function HTMLtoPDF() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    source = $('#HTMLtoPDF')[0];
    specialElementHandlers = {
        '#bypassme': function(element, renderer) {
            return true
        }
    }
    margins = {
        top: 50,
        left: 60,
        width: 545
    };
    var imgData = "data:image/jpeg;base64,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r/slfhf/ANNFrXv9eAf8EoP+UWn7NX/ZK/C//potaAPf6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvAPiN/ylL+Dn/ZK/Hn/p38G17/AF4B8Rv+Upfwc/7JX48/9O/g2gD3+iiigArwD/glB/yi0/Zq/wCyV+F//TRa17/XgH/BKD/lFp+zV/2Svwv/AOmi1oA9/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK8A+I3/KUv4Of9kr8ef+nfwbXv9eAfEb/lKX8HP+yV+PP/AE7+DaAPf6KKKACvAP8AglB/yi0/Zq/7JX4X/wDTRa17/XgH/BKD/lFp+zV/2Svwv/6aLWgD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArwD4jf8pS/g5/2Svx5/6d/Bte/wBeAfEb/lKX8HP+yV+PP/Tv4NoA9/ooooAK8A/4JQf8otP2av8Aslfhf/00Wte/14B/wSg/5Rafs1f9kr8L/wDpotaAPf6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvAPiN/ylL+Dn/ZK/Hn/p38G17/XgHxG/5Sl/Bz/slfjz/wBO/g2gD3+iiigArwD/AIJQf8otP2av+yV+F/8A00Wte/14B/wSg/5Rafs1f9kr8L/+mi1oA9/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK8A+I3/KUv4Of9kr8ef+nfwbXv8AXgHxG/5Sl/Bz/slfjz/07+DaAPf6KKKACvAP+CUH/KLT9mr/ALJX4X/9NFrXv9eAf8EoP+UWn7NX/ZK/C/8A6aLWgD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArwD4jf8pS/g5/2Svx5/6d/Bte/14B8Rv+Upfwc/7JX48/8ATv4NoA9/ooooAK8A/wCCUH/KLT9mr/slfhf/ANNFrXv9eAf8EoP+UWn7NX/ZK/C//potaAPf6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvAPiN/ylL+Dn/ZK/Hn/p38G17/AF4B8Rv+Upfwc/7JX48/9O/g2gD3+iiigAr5R/Z7/ZQ/aQ/Zs+Afgf4daH8a/gjdaJ4B8P2HhzT57/4P6o91Nb2dvHbxNKyeJUUyFI1LFUUEk4UDiiigDr/+Fc/tS/8ARY/gD/4ZzV//AJp6P+Fc/tS/9Fj+AP8A4ZzV/wD5p6KKAD/hXP7Uv/RY/gD/AOGc1f8A+aej/hXP7Uv/AEWP4A/+Gc1f/wCaeiigA/4Vz+1L/wBFj+AP/hnNX/8Amno/4Vz+1L/0WP4A/wDhnNX/APmnoooAP+Fc/tS/9Fj+AP8A4ZzV/wD5p6P+Fc/tS/8ARY/gD/4ZzV//AJp6KKAD/hXP7Uv/AEWP4A/+Gc1f/wCaej/hXP7Uv/RY/gD/AOGc1f8A+aeiigA/4Vz+1L/0WP4A/wDhnNX/APmno/4Vz+1L/wBFj+AP/hnNX/8AmnoooAP+Fc/tS/8ARY/gD/4ZzV//AJp6P+Fc/tS/9Fj+AP8A4ZzV/wD5p6KKAD/hXP7Uv/RY/gD/AOGc1f8A+aej/hXP7Uv/AEWP4A/+Gc1f/wCaeiigA/4Vz+1L/wBFj+AP/hnNX/8Amno/4Vz+1L/0WP4A/wDhnNX/APmnoooAP+Fc/tS/9Fj+AP8A4ZzV/wD5p6P+Fc/tS/8ARY/gD/4ZzV//AJp6KKAD/hXP7Uv/AEWP4A/+Gc1f/wCaej4X/s1fFL/hqXQviX8S/iN4A8T/APCMeFdY8M6bpvhnwJd+H/8AkJXek3Ms80txq19v2f2TGqoqJ/rXJY4AoooA9/ooooA//9k=";
    pdf.addImage(imgData, 'JPEG', 450, 20, 150, 150);
    pdf.fromHTML(
        source // HTML string or DOM elem ref.
        , margins.left // x coord
        , margins.top // y coord
        , {
            'width': margins.width // max width of content on PDF
                ,
            'elementHandlers': specialElementHandlers
        },
        function(dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            //          this allow the insertion of new lines after html
            pdf.save('ozgecmis.pdf');
        }
    )
}