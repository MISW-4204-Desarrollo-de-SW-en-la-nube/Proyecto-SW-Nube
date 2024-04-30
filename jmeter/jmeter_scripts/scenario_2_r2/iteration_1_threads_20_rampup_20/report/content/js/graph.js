/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 5469.0, "minX": 0.0, "maxY": 34271.0, "series": [{"data": [[0.0, 5469.0], [0.1, 5469.0], [0.2, 5469.0], [0.3, 5469.0], [0.4, 5469.0], [0.5, 5469.0], [0.6, 5469.0], [0.7, 5469.0], [0.8, 5469.0], [0.9, 5469.0], [1.0, 5469.0], [1.1, 5469.0], [1.2, 5469.0], [1.3, 5469.0], [1.4, 5469.0], [1.5, 5469.0], [1.6, 5469.0], [1.7, 5469.0], [1.8, 5469.0], [1.9, 5469.0], [2.0, 5469.0], [2.1, 5469.0], [2.2, 5469.0], [2.3, 5469.0], [2.4, 5469.0], [2.5, 5469.0], [2.6, 5469.0], [2.7, 5469.0], [2.8, 5469.0], [2.9, 5469.0], [3.0, 5469.0], [3.1, 5469.0], [3.2, 5469.0], [3.3, 5469.0], [3.4, 5469.0], [3.5, 5469.0], [3.6, 5469.0], [3.7, 5469.0], [3.8, 5469.0], [3.9, 5469.0], [4.0, 5469.0], [4.1, 5469.0], [4.2, 5469.0], [4.3, 5469.0], [4.4, 5469.0], [4.5, 5469.0], [4.6, 5469.0], [4.7, 5469.0], [4.8, 5469.0], [4.9, 5469.0], [5.0, 12588.0], [5.1, 12588.0], [5.2, 12588.0], [5.3, 12588.0], [5.4, 12588.0], [5.5, 12588.0], [5.6, 12588.0], [5.7, 12588.0], [5.8, 12588.0], [5.9, 12588.0], [6.0, 12588.0], [6.1, 12588.0], [6.2, 12588.0], [6.3, 12588.0], [6.4, 12588.0], [6.5, 12588.0], [6.6, 12588.0], [6.7, 12588.0], [6.8, 12588.0], [6.9, 12588.0], [7.0, 12588.0], [7.1, 12588.0], [7.2, 12588.0], [7.3, 12588.0], [7.4, 12588.0], [7.5, 12588.0], [7.6, 12588.0], [7.7, 12588.0], [7.8, 12588.0], [7.9, 12588.0], [8.0, 12588.0], [8.1, 12588.0], [8.2, 12588.0], [8.3, 12588.0], [8.4, 12588.0], [8.5, 12588.0], [8.6, 12588.0], [8.7, 12588.0], [8.8, 12588.0], [8.9, 12588.0], [9.0, 12588.0], [9.1, 12588.0], [9.2, 12588.0], [9.3, 12588.0], [9.4, 12588.0], [9.5, 12588.0], [9.6, 12588.0], [9.7, 12588.0], [9.8, 12588.0], [9.9, 12588.0], [10.0, 12780.0], [10.1, 12780.0], [10.2, 12780.0], [10.3, 12780.0], [10.4, 12780.0], [10.5, 12780.0], [10.6, 12780.0], [10.7, 12780.0], [10.8, 12780.0], [10.9, 12780.0], [11.0, 12780.0], [11.1, 12780.0], [11.2, 12780.0], [11.3, 12780.0], [11.4, 12780.0], [11.5, 12780.0], [11.6, 12780.0], [11.7, 12780.0], [11.8, 12780.0], [11.9, 12780.0], [12.0, 12780.0], [12.1, 12780.0], [12.2, 12780.0], [12.3, 12780.0], [12.4, 12780.0], [12.5, 12780.0], [12.6, 12780.0], [12.7, 12780.0], [12.8, 12780.0], [12.9, 12780.0], [13.0, 12780.0], [13.1, 12780.0], [13.2, 12780.0], [13.3, 12780.0], [13.4, 12780.0], [13.5, 12780.0], [13.6, 12780.0], [13.7, 12780.0], [13.8, 12780.0], [13.9, 12780.0], [14.0, 12780.0], [14.1, 12780.0], [14.2, 12780.0], [14.3, 12780.0], [14.4, 12780.0], [14.5, 12780.0], [14.6, 12780.0], [14.7, 12780.0], [14.8, 12780.0], [14.9, 12780.0], [15.0, 18441.0], [15.1, 18441.0], [15.2, 18441.0], [15.3, 18441.0], [15.4, 18441.0], [15.5, 18441.0], [15.6, 18441.0], [15.7, 18441.0], [15.8, 18441.0], [15.9, 18441.0], [16.0, 18441.0], [16.1, 18441.0], [16.2, 18441.0], [16.3, 18441.0], [16.4, 18441.0], [16.5, 18441.0], [16.6, 18441.0], [16.7, 18441.0], [16.8, 18441.0], [16.9, 18441.0], [17.0, 18441.0], [17.1, 18441.0], [17.2, 18441.0], [17.3, 18441.0], [17.4, 18441.0], [17.5, 18441.0], [17.6, 18441.0], [17.7, 18441.0], [17.8, 18441.0], [17.9, 18441.0], [18.0, 18441.0], [18.1, 18441.0], [18.2, 18441.0], [18.3, 18441.0], [18.4, 18441.0], [18.5, 18441.0], [18.6, 18441.0], [18.7, 18441.0], [18.8, 18441.0], [18.9, 18441.0], [19.0, 18441.0], [19.1, 18441.0], [19.2, 18441.0], [19.3, 18441.0], [19.4, 18441.0], [19.5, 18441.0], [19.6, 18441.0], [19.7, 18441.0], [19.8, 18441.0], [19.9, 18441.0], [20.0, 20708.0], [20.1, 20708.0], [20.2, 20708.0], [20.3, 20708.0], [20.4, 20708.0], [20.5, 20708.0], [20.6, 20708.0], [20.7, 20708.0], [20.8, 20708.0], [20.9, 20708.0], [21.0, 20708.0], [21.1, 20708.0], [21.2, 20708.0], [21.3, 20708.0], [21.4, 20708.0], [21.5, 20708.0], [21.6, 20708.0], [21.7, 20708.0], [21.8, 20708.0], [21.9, 20708.0], [22.0, 20708.0], [22.1, 20708.0], [22.2, 20708.0], [22.3, 20708.0], [22.4, 20708.0], [22.5, 20708.0], [22.6, 20708.0], [22.7, 20708.0], [22.8, 20708.0], [22.9, 20708.0], [23.0, 20708.0], [23.1, 20708.0], [23.2, 20708.0], [23.3, 20708.0], [23.4, 20708.0], [23.5, 20708.0], [23.6, 20708.0], [23.7, 20708.0], [23.8, 20708.0], [23.9, 20708.0], [24.0, 20708.0], [24.1, 20708.0], [24.2, 20708.0], [24.3, 20708.0], [24.4, 20708.0], [24.5, 20708.0], [24.6, 20708.0], [24.7, 20708.0], [24.8, 20708.0], [24.9, 20708.0], [25.0, 25295.0], [25.1, 25295.0], [25.2, 25295.0], [25.3, 25295.0], [25.4, 25295.0], [25.5, 25295.0], [25.6, 25295.0], [25.7, 25295.0], [25.8, 25295.0], [25.9, 25295.0], [26.0, 25295.0], [26.1, 25295.0], [26.2, 25295.0], [26.3, 25295.0], [26.4, 25295.0], [26.5, 25295.0], [26.6, 25295.0], [26.7, 25295.0], [26.8, 25295.0], [26.9, 25295.0], [27.0, 25295.0], [27.1, 25295.0], [27.2, 25295.0], [27.3, 25295.0], [27.4, 25295.0], [27.5, 25295.0], [27.6, 25295.0], [27.7, 25295.0], [27.8, 25295.0], [27.9, 25295.0], [28.0, 25295.0], [28.1, 25295.0], [28.2, 25295.0], [28.3, 25295.0], [28.4, 25295.0], [28.5, 25295.0], [28.6, 25295.0], [28.7, 25295.0], [28.8, 25295.0], [28.9, 25295.0], [29.0, 25295.0], [29.1, 25295.0], [29.2, 25295.0], [29.3, 25295.0], [29.4, 25295.0], [29.5, 25295.0], [29.6, 25295.0], [29.7, 25295.0], [29.8, 25295.0], [29.9, 25295.0], [30.0, 27296.0], [30.1, 27296.0], [30.2, 27296.0], [30.3, 27296.0], [30.4, 27296.0], [30.5, 27296.0], [30.6, 27296.0], [30.7, 27296.0], [30.8, 27296.0], [30.9, 27296.0], [31.0, 27296.0], [31.1, 27296.0], [31.2, 27296.0], [31.3, 27296.0], [31.4, 27296.0], [31.5, 27296.0], [31.6, 27296.0], [31.7, 27296.0], [31.8, 27296.0], [31.9, 27296.0], [32.0, 27296.0], [32.1, 27296.0], [32.2, 27296.0], [32.3, 27296.0], [32.4, 27296.0], [32.5, 27296.0], [32.6, 27296.0], [32.7, 27296.0], [32.8, 27296.0], [32.9, 27296.0], [33.0, 27296.0], [33.1, 27296.0], [33.2, 27296.0], [33.3, 27296.0], [33.4, 27296.0], [33.5, 27296.0], [33.6, 27296.0], [33.7, 27296.0], [33.8, 27296.0], [33.9, 27296.0], [34.0, 27296.0], [34.1, 27296.0], [34.2, 27296.0], [34.3, 27296.0], [34.4, 27296.0], [34.5, 27296.0], [34.6, 27296.0], [34.7, 27296.0], [34.8, 27296.0], [34.9, 27296.0], [35.0, 28982.0], [35.1, 28982.0], [35.2, 28982.0], [35.3, 28982.0], [35.4, 28982.0], [35.5, 28982.0], [35.6, 28982.0], [35.7, 28982.0], [35.8, 28982.0], [35.9, 28982.0], [36.0, 28982.0], [36.1, 28982.0], [36.2, 28982.0], [36.3, 28982.0], [36.4, 28982.0], [36.5, 28982.0], [36.6, 28982.0], [36.7, 28982.0], [36.8, 28982.0], [36.9, 28982.0], [37.0, 28982.0], [37.1, 28982.0], [37.2, 28982.0], [37.3, 28982.0], [37.4, 28982.0], [37.5, 28982.0], [37.6, 28982.0], [37.7, 28982.0], [37.8, 28982.0], [37.9, 28982.0], [38.0, 28982.0], [38.1, 28982.0], [38.2, 28982.0], [38.3, 28982.0], [38.4, 28982.0], [38.5, 28982.0], [38.6, 28982.0], [38.7, 28982.0], [38.8, 28982.0], [38.9, 28982.0], [39.0, 28982.0], [39.1, 28982.0], [39.2, 28982.0], [39.3, 28982.0], [39.4, 28982.0], [39.5, 28982.0], [39.6, 28982.0], [39.7, 28982.0], [39.8, 28982.0], [39.9, 28982.0], [40.0, 28985.0], [40.1, 28985.0], [40.2, 28985.0], [40.3, 28985.0], [40.4, 28985.0], [40.5, 28985.0], [40.6, 28985.0], [40.7, 28985.0], [40.8, 28985.0], [40.9, 28985.0], [41.0, 28985.0], [41.1, 28985.0], [41.2, 28985.0], [41.3, 28985.0], [41.4, 28985.0], [41.5, 28985.0], [41.6, 28985.0], [41.7, 28985.0], [41.8, 28985.0], [41.9, 28985.0], [42.0, 28985.0], [42.1, 28985.0], [42.2, 28985.0], [42.3, 28985.0], [42.4, 28985.0], [42.5, 28985.0], [42.6, 28985.0], [42.7, 28985.0], [42.8, 28985.0], [42.9, 28985.0], [43.0, 28985.0], [43.1, 28985.0], [43.2, 28985.0], [43.3, 28985.0], [43.4, 28985.0], [43.5, 28985.0], [43.6, 28985.0], [43.7, 28985.0], [43.8, 28985.0], [43.9, 28985.0], [44.0, 28985.0], [44.1, 28985.0], [44.2, 28985.0], [44.3, 28985.0], [44.4, 28985.0], [44.5, 28985.0], [44.6, 28985.0], [44.7, 28985.0], [44.8, 28985.0], [44.9, 28985.0], [45.0, 29861.0], [45.1, 29861.0], [45.2, 29861.0], [45.3, 29861.0], [45.4, 29861.0], [45.5, 29861.0], [45.6, 29861.0], [45.7, 29861.0], [45.8, 29861.0], [45.9, 29861.0], [46.0, 29861.0], [46.1, 29861.0], [46.2, 29861.0], [46.3, 29861.0], [46.4, 29861.0], [46.5, 29861.0], [46.6, 29861.0], [46.7, 29861.0], [46.8, 29861.0], [46.9, 29861.0], [47.0, 29861.0], [47.1, 29861.0], [47.2, 29861.0], [47.3, 29861.0], [47.4, 29861.0], [47.5, 29861.0], [47.6, 29861.0], [47.7, 29861.0], [47.8, 29861.0], [47.9, 29861.0], [48.0, 29861.0], [48.1, 29861.0], [48.2, 29861.0], [48.3, 29861.0], [48.4, 29861.0], [48.5, 29861.0], [48.6, 29861.0], [48.7, 29861.0], [48.8, 29861.0], [48.9, 29861.0], [49.0, 29861.0], [49.1, 29861.0], [49.2, 29861.0], [49.3, 29861.0], [49.4, 29861.0], [49.5, 29861.0], [49.6, 29861.0], [49.7, 29861.0], [49.8, 29861.0], [49.9, 29861.0], [50.0, 29910.0], [50.1, 29910.0], [50.2, 29910.0], [50.3, 29910.0], [50.4, 29910.0], [50.5, 29910.0], [50.6, 29910.0], [50.7, 29910.0], [50.8, 29910.0], [50.9, 29910.0], [51.0, 29910.0], [51.1, 29910.0], [51.2, 29910.0], [51.3, 29910.0], [51.4, 29910.0], [51.5, 29910.0], [51.6, 29910.0], [51.7, 29910.0], [51.8, 29910.0], [51.9, 29910.0], [52.0, 29910.0], [52.1, 29910.0], [52.2, 29910.0], [52.3, 29910.0], [52.4, 29910.0], [52.5, 29910.0], [52.6, 29910.0], [52.7, 29910.0], [52.8, 29910.0], [52.9, 29910.0], [53.0, 29910.0], [53.1, 29910.0], [53.2, 29910.0], [53.3, 29910.0], [53.4, 29910.0], [53.5, 29910.0], [53.6, 29910.0], [53.7, 29910.0], [53.8, 29910.0], [53.9, 29910.0], [54.0, 29910.0], [54.1, 29910.0], [54.2, 29910.0], [54.3, 29910.0], [54.4, 29910.0], [54.5, 29910.0], [54.6, 29910.0], [54.7, 29910.0], [54.8, 29910.0], [54.9, 29910.0], [55.0, 30173.0], [55.1, 30173.0], [55.2, 30173.0], [55.3, 30173.0], [55.4, 30173.0], [55.5, 30173.0], [55.6, 30173.0], [55.7, 30173.0], [55.8, 30173.0], [55.9, 30173.0], [56.0, 30173.0], [56.1, 30173.0], [56.2, 30173.0], [56.3, 30173.0], [56.4, 30173.0], [56.5, 30173.0], [56.6, 30173.0], [56.7, 30173.0], [56.8, 30173.0], [56.9, 30173.0], [57.0, 30173.0], [57.1, 30173.0], [57.2, 30173.0], [57.3, 30173.0], [57.4, 30173.0], [57.5, 30173.0], [57.6, 30173.0], [57.7, 30173.0], [57.8, 30173.0], [57.9, 30173.0], [58.0, 30173.0], [58.1, 30173.0], [58.2, 30173.0], [58.3, 30173.0], [58.4, 30173.0], [58.5, 30173.0], [58.6, 30173.0], [58.7, 30173.0], [58.8, 30173.0], [58.9, 30173.0], [59.0, 30173.0], [59.1, 30173.0], [59.2, 30173.0], [59.3, 30173.0], [59.4, 30173.0], [59.5, 30173.0], [59.6, 30173.0], [59.7, 30173.0], [59.8, 30173.0], [59.9, 30173.0], [60.0, 30517.0], [60.1, 30517.0], [60.2, 30517.0], [60.3, 30517.0], [60.4, 30517.0], [60.5, 30517.0], [60.6, 30517.0], [60.7, 30517.0], [60.8, 30517.0], [60.9, 30517.0], [61.0, 30517.0], [61.1, 30517.0], [61.2, 30517.0], [61.3, 30517.0], [61.4, 30517.0], [61.5, 30517.0], [61.6, 30517.0], [61.7, 30517.0], [61.8, 30517.0], [61.9, 30517.0], [62.0, 30517.0], [62.1, 30517.0], [62.2, 30517.0], [62.3, 30517.0], [62.4, 30517.0], [62.5, 30517.0], [62.6, 30517.0], [62.7, 30517.0], [62.8, 30517.0], [62.9, 30517.0], [63.0, 30517.0], [63.1, 30517.0], [63.2, 30517.0], [63.3, 30517.0], [63.4, 30517.0], [63.5, 30517.0], [63.6, 30517.0], [63.7, 30517.0], [63.8, 30517.0], [63.9, 30517.0], [64.0, 30517.0], [64.1, 30517.0], [64.2, 30517.0], [64.3, 30517.0], [64.4, 30517.0], [64.5, 30517.0], [64.6, 30517.0], [64.7, 30517.0], [64.8, 30517.0], [64.9, 30517.0], [65.0, 31021.0], [65.1, 31021.0], [65.2, 31021.0], [65.3, 31021.0], [65.4, 31021.0], [65.5, 31021.0], [65.6, 31021.0], [65.7, 31021.0], [65.8, 31021.0], [65.9, 31021.0], [66.0, 31021.0], [66.1, 31021.0], [66.2, 31021.0], [66.3, 31021.0], [66.4, 31021.0], [66.5, 31021.0], [66.6, 31021.0], [66.7, 31021.0], [66.8, 31021.0], [66.9, 31021.0], [67.0, 31021.0], [67.1, 31021.0], [67.2, 31021.0], [67.3, 31021.0], [67.4, 31021.0], [67.5, 31021.0], [67.6, 31021.0], [67.7, 31021.0], [67.8, 31021.0], [67.9, 31021.0], [68.0, 31021.0], [68.1, 31021.0], [68.2, 31021.0], [68.3, 31021.0], [68.4, 31021.0], [68.5, 31021.0], [68.6, 31021.0], [68.7, 31021.0], [68.8, 31021.0], [68.9, 31021.0], [69.0, 31021.0], [69.1, 31021.0], [69.2, 31021.0], [69.3, 31021.0], [69.4, 31021.0], [69.5, 31021.0], [69.6, 31021.0], [69.7, 31021.0], [69.8, 31021.0], [69.9, 31021.0], [70.0, 31310.0], [70.1, 31310.0], [70.2, 31310.0], [70.3, 31310.0], [70.4, 31310.0], [70.5, 31310.0], [70.6, 31310.0], [70.7, 31310.0], [70.8, 31310.0], [70.9, 31310.0], [71.0, 31310.0], [71.1, 31310.0], [71.2, 31310.0], [71.3, 31310.0], [71.4, 31310.0], [71.5, 31310.0], [71.6, 31310.0], [71.7, 31310.0], [71.8, 31310.0], [71.9, 31310.0], [72.0, 31310.0], [72.1, 31310.0], [72.2, 31310.0], [72.3, 31310.0], [72.4, 31310.0], [72.5, 31310.0], [72.6, 31310.0], [72.7, 31310.0], [72.8, 31310.0], [72.9, 31310.0], [73.0, 31310.0], [73.1, 31310.0], [73.2, 31310.0], [73.3, 31310.0], [73.4, 31310.0], [73.5, 31310.0], [73.6, 31310.0], [73.7, 31310.0], [73.8, 31310.0], [73.9, 31310.0], [74.0, 31310.0], [74.1, 31310.0], [74.2, 31310.0], [74.3, 31310.0], [74.4, 31310.0], [74.5, 31310.0], [74.6, 31310.0], [74.7, 31310.0], [74.8, 31310.0], [74.9, 31310.0], [75.0, 32125.0], [75.1, 32125.0], [75.2, 32125.0], [75.3, 32125.0], [75.4, 32125.0], [75.5, 32125.0], [75.6, 32125.0], [75.7, 32125.0], [75.8, 32125.0], [75.9, 32125.0], [76.0, 32125.0], [76.1, 32125.0], [76.2, 32125.0], [76.3, 32125.0], [76.4, 32125.0], [76.5, 32125.0], [76.6, 32125.0], [76.7, 32125.0], [76.8, 32125.0], [76.9, 32125.0], [77.0, 32125.0], [77.1, 32125.0], [77.2, 32125.0], [77.3, 32125.0], [77.4, 32125.0], [77.5, 32125.0], [77.6, 32125.0], [77.7, 32125.0], [77.8, 32125.0], [77.9, 32125.0], [78.0, 32125.0], [78.1, 32125.0], [78.2, 32125.0], [78.3, 32125.0], [78.4, 32125.0], [78.5, 32125.0], [78.6, 32125.0], [78.7, 32125.0], [78.8, 32125.0], [78.9, 32125.0], [79.0, 32125.0], [79.1, 32125.0], [79.2, 32125.0], [79.3, 32125.0], [79.4, 32125.0], [79.5, 32125.0], [79.6, 32125.0], [79.7, 32125.0], [79.8, 32125.0], [79.9, 32125.0], [80.0, 32196.0], [80.1, 32196.0], [80.2, 32196.0], [80.3, 32196.0], [80.4, 32196.0], [80.5, 32196.0], [80.6, 32196.0], [80.7, 32196.0], [80.8, 32196.0], [80.9, 32196.0], [81.0, 32196.0], [81.1, 32196.0], [81.2, 32196.0], [81.3, 32196.0], [81.4, 32196.0], [81.5, 32196.0], [81.6, 32196.0], [81.7, 32196.0], [81.8, 32196.0], [81.9, 32196.0], [82.0, 32196.0], [82.1, 32196.0], [82.2, 32196.0], [82.3, 32196.0], [82.4, 32196.0], [82.5, 32196.0], [82.6, 32196.0], [82.7, 32196.0], [82.8, 32196.0], [82.9, 32196.0], [83.0, 32196.0], [83.1, 32196.0], [83.2, 32196.0], [83.3, 32196.0], [83.4, 32196.0], [83.5, 32196.0], [83.6, 32196.0], [83.7, 32196.0], [83.8, 32196.0], [83.9, 32196.0], [84.0, 32196.0], [84.1, 32196.0], [84.2, 32196.0], [84.3, 32196.0], [84.4, 32196.0], [84.5, 32196.0], [84.6, 32196.0], [84.7, 32196.0], [84.8, 32196.0], [84.9, 32196.0], [85.0, 32743.0], [85.1, 32743.0], [85.2, 32743.0], [85.3, 32743.0], [85.4, 32743.0], [85.5, 32743.0], [85.6, 32743.0], [85.7, 32743.0], [85.8, 32743.0], [85.9, 32743.0], [86.0, 32743.0], [86.1, 32743.0], [86.2, 32743.0], [86.3, 32743.0], [86.4, 32743.0], [86.5, 32743.0], [86.6, 32743.0], [86.7, 32743.0], [86.8, 32743.0], [86.9, 32743.0], [87.0, 32743.0], [87.1, 32743.0], [87.2, 32743.0], [87.3, 32743.0], [87.4, 32743.0], [87.5, 32743.0], [87.6, 32743.0], [87.7, 32743.0], [87.8, 32743.0], [87.9, 32743.0], [88.0, 32743.0], [88.1, 32743.0], [88.2, 32743.0], [88.3, 32743.0], [88.4, 32743.0], [88.5, 32743.0], [88.6, 32743.0], [88.7, 32743.0], [88.8, 32743.0], [88.9, 32743.0], [89.0, 32743.0], [89.1, 32743.0], [89.2, 32743.0], [89.3, 32743.0], [89.4, 32743.0], [89.5, 32743.0], [89.6, 32743.0], [89.7, 32743.0], [89.8, 32743.0], [89.9, 32743.0], [90.0, 33135.0], [90.1, 33135.0], [90.2, 33135.0], [90.3, 33135.0], [90.4, 33135.0], [90.5, 33135.0], [90.6, 33135.0], [90.7, 33135.0], [90.8, 33135.0], [90.9, 33135.0], [91.0, 33135.0], [91.1, 33135.0], [91.2, 33135.0], [91.3, 33135.0], [91.4, 33135.0], [91.5, 33135.0], [91.6, 33135.0], [91.7, 33135.0], [91.8, 33135.0], [91.9, 33135.0], [92.0, 33135.0], [92.1, 33135.0], [92.2, 33135.0], [92.3, 33135.0], [92.4, 33135.0], [92.5, 33135.0], [92.6, 33135.0], [92.7, 33135.0], [92.8, 33135.0], [92.9, 33135.0], [93.0, 33135.0], [93.1, 33135.0], [93.2, 33135.0], [93.3, 33135.0], [93.4, 33135.0], [93.5, 33135.0], [93.6, 33135.0], [93.7, 33135.0], [93.8, 33135.0], [93.9, 33135.0], [94.0, 33135.0], [94.1, 33135.0], [94.2, 33135.0], [94.3, 33135.0], [94.4, 33135.0], [94.5, 33135.0], [94.6, 33135.0], [94.7, 33135.0], [94.8, 33135.0], [94.9, 33135.0], [95.0, 34271.0], [95.1, 34271.0], [95.2, 34271.0], [95.3, 34271.0], [95.4, 34271.0], [95.5, 34271.0], [95.6, 34271.0], [95.7, 34271.0], [95.8, 34271.0], [95.9, 34271.0], [96.0, 34271.0], [96.1, 34271.0], [96.2, 34271.0], [96.3, 34271.0], [96.4, 34271.0], [96.5, 34271.0], [96.6, 34271.0], [96.7, 34271.0], [96.8, 34271.0], [96.9, 34271.0], [97.0, 34271.0], [97.1, 34271.0], [97.2, 34271.0], [97.3, 34271.0], [97.4, 34271.0], [97.5, 34271.0], [97.6, 34271.0], [97.7, 34271.0], [97.8, 34271.0], [97.9, 34271.0], [98.0, 34271.0], [98.1, 34271.0], [98.2, 34271.0], [98.3, 34271.0], [98.4, 34271.0], [98.5, 34271.0], [98.6, 34271.0], [98.7, 34271.0], [98.8, 34271.0], [98.9, 34271.0], [99.0, 34271.0], [99.1, 34271.0], [99.2, 34271.0], [99.3, 34271.0], [99.4, 34271.0], [99.5, 34271.0], [99.6, 34271.0], [99.7, 34271.0], [99.8, 34271.0], [99.9, 34271.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 5400.0, "maxY": 2.0, "series": [{"data": [[33100.0, 1.0], [34200.0, 1.0], [12500.0, 1.0], [12700.0, 1.0], [18400.0, 1.0], [20700.0, 1.0], [5400.0, 1.0], [25200.0, 1.0], [27200.0, 1.0], [28900.0, 2.0], [29800.0, 1.0], [30100.0, 1.0], [29900.0, 1.0], [30500.0, 1.0], [31000.0, 1.0], [31300.0, 1.0], [32700.0, 1.0], [32100.0, 2.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 34200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 20.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 20.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 7.5, "minX": 1.71371814E12, "maxY": 13.666666666666668, "series": [{"data": [[1.71371814E12, 13.666666666666668], [1.7137182E12, 7.5]], "isOverall": false, "label": "Primer Escenario", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7137182E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 18441.0, "minX": 1.0, "maxY": 33135.0, "series": [{"data": [[8.0, 19870.0], [2.0, 32125.0], [9.0, 28982.0], [10.0, 28985.0], [11.0, 33135.0], [12.0, 19942.0], [3.0, 32743.0], [13.0, 30173.0], [14.0, 19037.5], [15.0, 29861.0], [16.0, 20708.0], [4.0, 30517.0], [1.0, 32196.0], [17.0, 18441.0], [5.0, 31310.0], [6.0, 31021.0], [7.0, 29910.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}, {"data": [[9.349999999999998, 26390.3]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 17.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 19.8, "minX": 1.71371814E12, "maxY": 8600970.016666668, "series": [{"data": [[1.71371814E12, 19.8], [1.7137182E12, 46.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71371814E12, 3686130.0], [1.7137182E12, 8600970.016666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7137182E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 16641.166666666668, "minX": 1.71371814E12, "maxY": 30568.500000000004, "series": [{"data": [[1.71371814E12, 16641.166666666668], [1.7137182E12, 30568.500000000004]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7137182E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 16640.166666666668, "minX": 1.71371814E12, "maxY": 30568.500000000004, "series": [{"data": [[1.71371814E12, 16640.166666666668], [1.7137182E12, 30568.500000000004]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7137182E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 66.0, "minX": 1.71371814E12, "maxY": 72.66666666666666, "series": [{"data": [[1.71371814E12, 72.66666666666666], [1.7137182E12, 66.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7137182E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 5469.0, "minX": 1.71371814E12, "maxY": 34271.0, "series": [{"data": [[1.71371814E12, 29861.0], [1.7137182E12, 34271.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71371814E12, 29861.0], [1.7137182E12, 33703.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71371814E12, 29861.0], [1.7137182E12, 34271.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71371814E12, 29861.0], [1.7137182E12, 34271.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71371814E12, 5469.0], [1.7137182E12, 25295.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71371814E12, 15610.5], [1.7137182E12, 30769.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7137182E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 29885.5, "minX": 1.0, "maxY": 31060.0, "series": [{"data": [[1.0, 29885.5], [2.0, 31060.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 29885.5, "minX": 1.0, "maxY": 31060.0, "series": [{"data": [[1.0, 29885.5], [2.0, 31060.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.71371814E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.71371814E12, 0.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71371814E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.71371814E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.71371814E12, 0.1], [1.7137182E12, 0.23333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7137182E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.71371814E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.71371814E12, 0.1], [1.7137182E12, 0.23333333333333334]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7137182E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.71371814E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.71371814E12, 0.1], [1.7137182E12, 0.23333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7137182E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}
