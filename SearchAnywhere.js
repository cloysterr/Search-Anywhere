Ext.define('Nc.dashboards.configurable.widget.SearchAnywhere', {
    extend:'Ext.Container',
    xtype: 'searchAnywhere-widget',

    requires: [
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text'
    ],
    items: [
        {
            xtype: 'fieldcontainer',
            layout: 'hbox',
            items: [
                {
                    xtype: 'textfield',
                    emptyText: 'Search',
                    fieldLabel: 'Games::'
                },
                {
                    xtype: 'button',
                    text: 'Go!',
                    ui: 'light',
                    onClick: function () {

                        var toBeSearched = this.up().items.items[0].value;
                        var spaceIndex = toBeSearched.lastIndexOf(' ');
                        var psStoreSearchTerm = toBeSearched.substr(0, spaceIndex);
                        var url1 = 'https://www.amazon.in/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=' + toBeSearched;
                        var url2 = 'https://www.flipkart.com/search?q=' + toBeSearched + '&otracker=start&as-show=off&as=off';
                        var url3 = 'https://www.ebay.in/sch/i.html?_odkw=' + toBeSearched + '&_osacat=0&_from=R40&_trksid=p2045573.m570.l1313.TR0.TRC0.H0.TRS0&_nkw=' + toBeSearched + '&_sacat=0';
                        var url4 = 'https://paytmmall.com/shop/search?q=' + toBeSearched + '&from=organic&child_site_id=6&site_id=2';
                        var url5 = 'http://gameloot.in/?s=' + toBeSearched + '&post_type=product&dgwt_wcas=1';
                        var url6 = 'https://in.webuy.com/search?stext=' + toBeSearched;
                        var url7 = 'https://www.snapdeal.com/search?keyword=' + toBeSearched + '&santizedKeyword=&catId=&categoryId=0&suggested=false&vertical=&noOfResults=20&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy';
                        var url8 = 'https://store.playstation.com/en-in/search' + '/' + psStoreSearchTerm;

                        var urlArr = [];
                        urlArr.push(url1);
                        urlArr.push(url2);
                        urlArr.push(url3);
                        urlArr.push(url4);
                        urlArr.push(url5);
                        urlArr.push(url6);
                        urlArr.push(url7);
                        urlArr.push(url8);


                        openTab(urlArr);

                    }
                }
            ]
        }
    ]
});
function openTab(urlArr) {
    for (var i = 0; i < urlArr.length; i++) {
        setTimeout(function (x) {
            window.open(urlArr[x]);
            debugger
        }(i), 1000);
    }
}

/*
//for usage
{
    xtype: 'searchAnywhere-widget'
},
 */