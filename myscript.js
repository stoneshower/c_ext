chrome.storage.sync.get("showRasta", function (obj) {
    console.log(obj.showRasta.on);
    if(obj.showRasta.on == 'true'){

        (function($) {
            /***
             * Validation for JSON Rasta: Checking the number of the data and template elements
             **/

            // Get the DOM element which wraps Rasta element
            var $radTable = $('.rad-table-existItemDisplay');


            // Get stringified HTML element
            function stringifyElement($element) {
                return $('<div>').append($element.clone()).html();
            }


            // Loop the each Rasta Element
            $radTable.each(function(){
                // Get all the texts inside $radTable and removes white space
                var $selfText = stringifyElement($(this));


                // console.log($selfText);

                // Remove white space
                var $selfText = $selfText.replace(/\s/g, '');

                // Get the array of the texts which match "ALPHABET" + "NUMBER" + "ALPHABET" + "NUMBER" or "ALPHABET + NUMBER";
                $selfText = $selfText.match(/#?[(A-Z)]+[(0-9)]+[(A-Z)]+[(0-9)]+#?|#?[(A-Z)]+[(0-9)]+#?/g);


                // Remove the duplicated array
                // $selfText = $selfText.filter(function (element, index, array) {
                //     return array.indexOf(element) === index;
                // });
                $selfText = [...new Set($selfText)];

                // Set default number to count as zero
                var rastaTempImageNum = 0;
                var rastaTempTextNum = 0;
                var rastaTempShopNum = 0;
                var rastaTempShopIcomNum = 0;
                var rastaTempIconNum = 0;

                // Iterate the number of the each template element
                $.each( $selfText, function(key, value){
                    if( /^#IMAGE[0-9]+/g.test(value) ){ rastaTempImageNum++; }
                    if( /^#TEXT[0-9]+/g.test(value) ){ rastaTempTextNum++; }
                    if( /^#SHOP[0-9]+/g.test(value) ){ rastaTempShopNum++; }
                    if( /^#ICON[0-9]+/g.test(value) ){ rastaTempIconNum++; }
                });

                // Get the DOM config element
                var $rastaConfig = $(this).find('.rad-table-config');

                // Get the value of the each attribute of config
                var rastaImageConfigNum = parseInt( $rastaConfig.attr('imagenum') );
                var rastaTextConfigNum = parseInt( $rastaConfig.attr('textnum') );
                var rastaShopConfigNum = parseInt( $rastaConfig.attr('shopnum') );
                var rastaIconConfigNum = parseInt( $rastaConfig.attr('iconnum') );

                // Compare the number of the data and template elements
                if(rastaTempImageNum === rastaImageConfigNum){
                    var rastaImageNote = '<p>IMAGE NUM IS FINE</p>';
                }else{
                    var rastaImageNote ='<p class="rastaNoteError">IMAGE NUM IS WRONG!!!</p>';
                }

                if(rastaTempTextNum === rastaTextConfigNum){
                    var rastaTextNote = '<p>TEXT NUM IS FINE</p>';
                }else{
                    var rastaTextNote = '<p class="rastaNoteError">TEXT NUM IS WRONG!!!</p>';
                }

                if(rastaTempShopNum === rastaShopConfigNum){
                    var rastaShopNote = '<p>SHOP NUM IS FINE</p>';
                }else{
                    var rastaShopNote = '<p class="rastaNoteError">SHOP NUM IS WRONG!!!</p>';
                }

                if(rastaTempIconNum === rastaIconConfigNum){
                    var rastaIconNote = '<p>ICON NUM IS FINE</p>';
                }else{
                    var rastaIconNote = '<p class="rastaNoteError">ICON NUM IS WRONG!!!</p>';
                }

                // Output the result on DOM
                var rastaUrl = $rastaConfig.attr('url');
                console.log(rastaUrl);


                var $self = $(this);

                // Get the DOM element of the template
                var $radTableFrame = $self.find('.rad-table-frame');

                $.ajax({
                  url: rastaUrl,
                  cache: false,
                  data: "",
                  dataType: "json",
                  success: function(data){
                    if( data.adList.length !== 0) {
                        $self.prepend('<div class="rastaNote" />');
                            $self.find('.rastaNote').prepend(
                                rastaImageNote +
                                rastaTextNote +
                                rastaShopNote +
                                rastaIconNote
                            );
                        $radTable.show();
                    } else {
                        $self.prepend('<div class="rastaNote" />');
                            $self.find('.rastaNote').prepend(
                                '<p class="rastaNoteError">No Data</p>'
                            );
                        $radTable.show();
                        $radTableFrame.hide();
                    }

                  },
                  error: function(){
                    console.log('error');
                  }
                });


            });

            $( '<style>.rastaNote { padding: 0px;box-sizing: border-box; color: #fff; background-color:#4E4E4E }.rastaNoteError{ background-color:red;color:#fff;font-weight:bold; }.rastaNote p{padding: 5px;box-sizing:border-box;}</style>' ).appendTo( 'head' );

        })(jQuery);
    }
});
