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
        data: {"result": {"minY": 4668.0, "minX": 0.0, "maxY": 100222.0, "series": [{"data": [[0.0, 4668.0], [0.1, 4668.0], [0.2, 4668.0], [0.3, 4668.0], [0.4, 4668.0], [0.5, 4668.0], [0.6, 4668.0], [0.7, 4668.0], [0.8, 4668.0], [0.9, 4668.0], [1.0, 4668.0], [1.1, 4668.0], [1.2, 4668.0], [1.3, 4668.0], [1.4, 4668.0], [1.5, 4668.0], [1.6, 4668.0], [1.7, 4668.0], [1.8, 4668.0], [1.9, 4668.0], [2.0, 7266.0], [2.1, 7266.0], [2.2, 7266.0], [2.3, 7266.0], [2.4, 7266.0], [2.5, 7266.0], [2.6, 7266.0], [2.7, 7266.0], [2.8, 7266.0], [2.9, 7266.0], [3.0, 7266.0], [3.1, 7266.0], [3.2, 7266.0], [3.3, 7266.0], [3.4, 7266.0], [3.5, 7266.0], [3.6, 7266.0], [3.7, 7266.0], [3.8, 7266.0], [3.9, 7266.0], [4.0, 9458.0], [4.1, 9458.0], [4.2, 9458.0], [4.3, 9458.0], [4.4, 9458.0], [4.5, 9458.0], [4.6, 9458.0], [4.7, 9458.0], [4.8, 9458.0], [4.9, 9458.0], [5.0, 9458.0], [5.1, 9458.0], [5.2, 9458.0], [5.3, 9458.0], [5.4, 9458.0], [5.5, 9458.0], [5.6, 9458.0], [5.7, 9458.0], [5.8, 9458.0], [5.9, 9458.0], [6.0, 14808.0], [6.1, 14808.0], [6.2, 14808.0], [6.3, 14808.0], [6.4, 14808.0], [6.5, 14808.0], [6.6, 14808.0], [6.7, 14808.0], [6.8, 14808.0], [6.9, 14808.0], [7.0, 14808.0], [7.1, 14808.0], [7.2, 14808.0], [7.3, 14808.0], [7.4, 14808.0], [7.5, 14808.0], [7.6, 14808.0], [7.7, 14808.0], [7.8, 14808.0], [7.9, 14808.0], [8.0, 20498.0], [8.1, 20498.0], [8.2, 20498.0], [8.3, 20498.0], [8.4, 20498.0], [8.5, 20498.0], [8.6, 20498.0], [8.7, 20498.0], [8.8, 20498.0], [8.9, 20498.0], [9.0, 20498.0], [9.1, 20498.0], [9.2, 20498.0], [9.3, 20498.0], [9.4, 20498.0], [9.5, 20498.0], [9.6, 20498.0], [9.7, 20498.0], [9.8, 20498.0], [9.9, 20498.0], [10.0, 25317.0], [10.1, 25317.0], [10.2, 25317.0], [10.3, 25317.0], [10.4, 25317.0], [10.5, 25317.0], [10.6, 25317.0], [10.7, 25317.0], [10.8, 25317.0], [10.9, 25317.0], [11.0, 25317.0], [11.1, 25317.0], [11.2, 25317.0], [11.3, 25317.0], [11.4, 25317.0], [11.5, 25317.0], [11.6, 25317.0], [11.7, 25317.0], [11.8, 25317.0], [11.9, 25317.0], [12.0, 26769.0], [12.1, 26769.0], [12.2, 26769.0], [12.3, 26769.0], [12.4, 26769.0], [12.5, 26769.0], [12.6, 26769.0], [12.7, 26769.0], [12.8, 26769.0], [12.9, 26769.0], [13.0, 26769.0], [13.1, 26769.0], [13.2, 26769.0], [13.3, 26769.0], [13.4, 26769.0], [13.5, 26769.0], [13.6, 26769.0], [13.7, 26769.0], [13.8, 26769.0], [13.9, 26769.0], [14.0, 27079.0], [14.1, 27079.0], [14.2, 27079.0], [14.3, 27079.0], [14.4, 27079.0], [14.5, 27079.0], [14.6, 27079.0], [14.7, 27079.0], [14.8, 27079.0], [14.9, 27079.0], [15.0, 27079.0], [15.1, 27079.0], [15.2, 27079.0], [15.3, 27079.0], [15.4, 27079.0], [15.5, 27079.0], [15.6, 27079.0], [15.7, 27079.0], [15.8, 27079.0], [15.9, 27079.0], [16.0, 30737.0], [16.1, 30737.0], [16.2, 30737.0], [16.3, 30737.0], [16.4, 30737.0], [16.5, 30737.0], [16.6, 30737.0], [16.7, 30737.0], [16.8, 30737.0], [16.9, 30737.0], [17.0, 30737.0], [17.1, 30737.0], [17.2, 30737.0], [17.3, 30737.0], [17.4, 30737.0], [17.5, 30737.0], [17.6, 30737.0], [17.7, 30737.0], [17.8, 30737.0], [17.9, 30737.0], [18.0, 31658.0], [18.1, 31658.0], [18.2, 31658.0], [18.3, 31658.0], [18.4, 31658.0], [18.5, 31658.0], [18.6, 31658.0], [18.7, 31658.0], [18.8, 31658.0], [18.9, 31658.0], [19.0, 31658.0], [19.1, 31658.0], [19.2, 31658.0], [19.3, 31658.0], [19.4, 31658.0], [19.5, 31658.0], [19.6, 31658.0], [19.7, 31658.0], [19.8, 31658.0], [19.9, 31658.0], [20.0, 38501.0], [20.1, 38501.0], [20.2, 38501.0], [20.3, 38501.0], [20.4, 38501.0], [20.5, 38501.0], [20.6, 38501.0], [20.7, 38501.0], [20.8, 38501.0], [20.9, 38501.0], [21.0, 38501.0], [21.1, 38501.0], [21.2, 38501.0], [21.3, 38501.0], [21.4, 38501.0], [21.5, 38501.0], [21.6, 38501.0], [21.7, 38501.0], [21.8, 38501.0], [21.9, 38501.0], [22.0, 38825.0], [22.1, 38825.0], [22.2, 38825.0], [22.3, 38825.0], [22.4, 38825.0], [22.5, 38825.0], [22.6, 38825.0], [22.7, 38825.0], [22.8, 38825.0], [22.9, 38825.0], [23.0, 38825.0], [23.1, 38825.0], [23.2, 38825.0], [23.3, 38825.0], [23.4, 38825.0], [23.5, 38825.0], [23.6, 38825.0], [23.7, 38825.0], [23.8, 38825.0], [23.9, 38825.0], [24.0, 38944.0], [24.1, 38944.0], [24.2, 38944.0], [24.3, 38944.0], [24.4, 38944.0], [24.5, 38944.0], [24.6, 38944.0], [24.7, 38944.0], [24.8, 38944.0], [24.9, 38944.0], [25.0, 38944.0], [25.1, 38944.0], [25.2, 38944.0], [25.3, 38944.0], [25.4, 38944.0], [25.5, 38944.0], [25.6, 38944.0], [25.7, 38944.0], [25.8, 38944.0], [25.9, 38944.0], [26.0, 39984.0], [26.1, 39984.0], [26.2, 39984.0], [26.3, 39984.0], [26.4, 39984.0], [26.5, 39984.0], [26.6, 39984.0], [26.7, 39984.0], [26.8, 39984.0], [26.9, 39984.0], [27.0, 39984.0], [27.1, 39984.0], [27.2, 39984.0], [27.3, 39984.0], [27.4, 39984.0], [27.5, 39984.0], [27.6, 39984.0], [27.7, 39984.0], [27.8, 39984.0], [27.9, 39984.0], [28.0, 40840.0], [28.1, 40840.0], [28.2, 40840.0], [28.3, 40840.0], [28.4, 40840.0], [28.5, 40840.0], [28.6, 40840.0], [28.7, 40840.0], [28.8, 40840.0], [28.9, 40840.0], [29.0, 40840.0], [29.1, 40840.0], [29.2, 40840.0], [29.3, 40840.0], [29.4, 40840.0], [29.5, 40840.0], [29.6, 40840.0], [29.7, 40840.0], [29.8, 40840.0], [29.9, 40840.0], [30.0, 41319.0], [30.1, 41319.0], [30.2, 41319.0], [30.3, 41319.0], [30.4, 41319.0], [30.5, 41319.0], [30.6, 41319.0], [30.7, 41319.0], [30.8, 41319.0], [30.9, 41319.0], [31.0, 41319.0], [31.1, 41319.0], [31.2, 41319.0], [31.3, 41319.0], [31.4, 41319.0], [31.5, 41319.0], [31.6, 41319.0], [31.7, 41319.0], [31.8, 41319.0], [31.9, 41319.0], [32.0, 43912.0], [32.1, 43912.0], [32.2, 43912.0], [32.3, 43912.0], [32.4, 43912.0], [32.5, 43912.0], [32.6, 43912.0], [32.7, 43912.0], [32.8, 43912.0], [32.9, 43912.0], [33.0, 43912.0], [33.1, 43912.0], [33.2, 43912.0], [33.3, 43912.0], [33.4, 43912.0], [33.5, 43912.0], [33.6, 43912.0], [33.7, 43912.0], [33.8, 43912.0], [33.9, 43912.0], [34.0, 44936.0], [34.1, 44936.0], [34.2, 44936.0], [34.3, 44936.0], [34.4, 44936.0], [34.5, 44936.0], [34.6, 44936.0], [34.7, 44936.0], [34.8, 44936.0], [34.9, 44936.0], [35.0, 44936.0], [35.1, 44936.0], [35.2, 44936.0], [35.3, 44936.0], [35.4, 44936.0], [35.5, 44936.0], [35.6, 44936.0], [35.7, 44936.0], [35.8, 44936.0], [35.9, 44936.0], [36.0, 48800.0], [36.1, 48800.0], [36.2, 48800.0], [36.3, 48800.0], [36.4, 48800.0], [36.5, 48800.0], [36.6, 48800.0], [36.7, 48800.0], [36.8, 48800.0], [36.9, 48800.0], [37.0, 48800.0], [37.1, 48800.0], [37.2, 48800.0], [37.3, 48800.0], [37.4, 48800.0], [37.5, 48800.0], [37.6, 48800.0], [37.7, 48800.0], [37.8, 48800.0], [37.9, 48800.0], [38.0, 49144.0], [38.1, 49144.0], [38.2, 49144.0], [38.3, 49144.0], [38.4, 49144.0], [38.5, 49144.0], [38.6, 49144.0], [38.7, 49144.0], [38.8, 49144.0], [38.9, 49144.0], [39.0, 49144.0], [39.1, 49144.0], [39.2, 49144.0], [39.3, 49144.0], [39.4, 49144.0], [39.5, 49144.0], [39.6, 49144.0], [39.7, 49144.0], [39.8, 49144.0], [39.9, 49144.0], [40.0, 52407.0], [40.1, 52407.0], [40.2, 52407.0], [40.3, 52407.0], [40.4, 52407.0], [40.5, 52407.0], [40.6, 52407.0], [40.7, 52407.0], [40.8, 52407.0], [40.9, 52407.0], [41.0, 52407.0], [41.1, 52407.0], [41.2, 52407.0], [41.3, 52407.0], [41.4, 52407.0], [41.5, 52407.0], [41.6, 52407.0], [41.7, 52407.0], [41.8, 52407.0], [41.9, 52407.0], [42.0, 57494.0], [42.1, 57494.0], [42.2, 57494.0], [42.3, 57494.0], [42.4, 57494.0], [42.5, 57494.0], [42.6, 57494.0], [42.7, 57494.0], [42.8, 57494.0], [42.9, 57494.0], [43.0, 57494.0], [43.1, 57494.0], [43.2, 57494.0], [43.3, 57494.0], [43.4, 57494.0], [43.5, 57494.0], [43.6, 57494.0], [43.7, 57494.0], [43.8, 57494.0], [43.9, 57494.0], [44.0, 59644.0], [44.1, 59644.0], [44.2, 59644.0], [44.3, 59644.0], [44.4, 59644.0], [44.5, 59644.0], [44.6, 59644.0], [44.7, 59644.0], [44.8, 59644.0], [44.9, 59644.0], [45.0, 59644.0], [45.1, 59644.0], [45.2, 59644.0], [45.3, 59644.0], [45.4, 59644.0], [45.5, 59644.0], [45.6, 59644.0], [45.7, 59644.0], [45.8, 59644.0], [45.9, 59644.0], [46.0, 61410.0], [46.1, 61410.0], [46.2, 61410.0], [46.3, 61410.0], [46.4, 61410.0], [46.5, 61410.0], [46.6, 61410.0], [46.7, 61410.0], [46.8, 61410.0], [46.9, 61410.0], [47.0, 61410.0], [47.1, 61410.0], [47.2, 61410.0], [47.3, 61410.0], [47.4, 61410.0], [47.5, 61410.0], [47.6, 61410.0], [47.7, 61410.0], [47.8, 61410.0], [47.9, 61410.0], [48.0, 63338.0], [48.1, 63338.0], [48.2, 63338.0], [48.3, 63338.0], [48.4, 63338.0], [48.5, 63338.0], [48.6, 63338.0], [48.7, 63338.0], [48.8, 63338.0], [48.9, 63338.0], [49.0, 63338.0], [49.1, 63338.0], [49.2, 63338.0], [49.3, 63338.0], [49.4, 63338.0], [49.5, 63338.0], [49.6, 63338.0], [49.7, 63338.0], [49.8, 63338.0], [49.9, 63338.0], [50.0, 72970.0], [50.1, 72970.0], [50.2, 72970.0], [50.3, 72970.0], [50.4, 72970.0], [50.5, 72970.0], [50.6, 72970.0], [50.7, 72970.0], [50.8, 72970.0], [50.9, 72970.0], [51.0, 72970.0], [51.1, 72970.0], [51.2, 72970.0], [51.3, 72970.0], [51.4, 72970.0], [51.5, 72970.0], [51.6, 72970.0], [51.7, 72970.0], [51.8, 72970.0], [51.9, 72970.0], [52.0, 73855.0], [52.1, 73855.0], [52.2, 73855.0], [52.3, 73855.0], [52.4, 73855.0], [52.5, 73855.0], [52.6, 73855.0], [52.7, 73855.0], [52.8, 73855.0], [52.9, 73855.0], [53.0, 73855.0], [53.1, 73855.0], [53.2, 73855.0], [53.3, 73855.0], [53.4, 73855.0], [53.5, 73855.0], [53.6, 73855.0], [53.7, 73855.0], [53.8, 73855.0], [53.9, 73855.0], [54.0, 74376.0], [54.1, 74376.0], [54.2, 74376.0], [54.3, 74376.0], [54.4, 74376.0], [54.5, 74376.0], [54.6, 74376.0], [54.7, 74376.0], [54.8, 74376.0], [54.9, 74376.0], [55.0, 74376.0], [55.1, 74376.0], [55.2, 74376.0], [55.3, 74376.0], [55.4, 74376.0], [55.5, 74376.0], [55.6, 74376.0], [55.7, 74376.0], [55.8, 74376.0], [55.9, 74376.0], [56.0, 76260.0], [56.1, 76260.0], [56.2, 76260.0], [56.3, 76260.0], [56.4, 76260.0], [56.5, 76260.0], [56.6, 76260.0], [56.7, 76260.0], [56.8, 76260.0], [56.9, 76260.0], [57.0, 76260.0], [57.1, 76260.0], [57.2, 76260.0], [57.3, 76260.0], [57.4, 76260.0], [57.5, 76260.0], [57.6, 76260.0], [57.7, 76260.0], [57.8, 76260.0], [57.9, 76260.0], [58.0, 78613.0], [58.1, 78613.0], [58.2, 78613.0], [58.3, 78613.0], [58.4, 78613.0], [58.5, 78613.0], [58.6, 78613.0], [58.7, 78613.0], [58.8, 78613.0], [58.9, 78613.0], [59.0, 78613.0], [59.1, 78613.0], [59.2, 78613.0], [59.3, 78613.0], [59.4, 78613.0], [59.5, 78613.0], [59.6, 78613.0], [59.7, 78613.0], [59.8, 78613.0], [59.9, 78613.0], [60.0, 79405.0], [60.1, 79405.0], [60.2, 79405.0], [60.3, 79405.0], [60.4, 79405.0], [60.5, 79405.0], [60.6, 79405.0], [60.7, 79405.0], [60.8, 79405.0], [60.9, 79405.0], [61.0, 79405.0], [61.1, 79405.0], [61.2, 79405.0], [61.3, 79405.0], [61.4, 79405.0], [61.5, 79405.0], [61.6, 79405.0], [61.7, 79405.0], [61.8, 79405.0], [61.9, 79405.0], [62.0, 81135.0], [62.1, 81135.0], [62.2, 81135.0], [62.3, 81135.0], [62.4, 81135.0], [62.5, 81135.0], [62.6, 81135.0], [62.7, 81135.0], [62.8, 81135.0], [62.9, 81135.0], [63.0, 81135.0], [63.1, 81135.0], [63.2, 81135.0], [63.3, 81135.0], [63.4, 81135.0], [63.5, 81135.0], [63.6, 81135.0], [63.7, 81135.0], [63.8, 81135.0], [63.9, 81135.0], [64.0, 81676.0], [64.1, 81676.0], [64.2, 81676.0], [64.3, 81676.0], [64.4, 81676.0], [64.5, 81676.0], [64.6, 81676.0], [64.7, 81676.0], [64.8, 81676.0], [64.9, 81676.0], [65.0, 81676.0], [65.1, 81676.0], [65.2, 81676.0], [65.3, 81676.0], [65.4, 81676.0], [65.5, 81676.0], [65.6, 81676.0], [65.7, 81676.0], [65.8, 81676.0], [65.9, 81676.0], [66.0, 82081.0], [66.1, 82081.0], [66.2, 82081.0], [66.3, 82081.0], [66.4, 82081.0], [66.5, 82081.0], [66.6, 82081.0], [66.7, 82081.0], [66.8, 82081.0], [66.9, 82081.0], [67.0, 82081.0], [67.1, 82081.0], [67.2, 82081.0], [67.3, 82081.0], [67.4, 82081.0], [67.5, 82081.0], [67.6, 82081.0], [67.7, 82081.0], [67.8, 82081.0], [67.9, 82081.0], [68.0, 84384.0], [68.1, 84384.0], [68.2, 84384.0], [68.3, 84384.0], [68.4, 84384.0], [68.5, 84384.0], [68.6, 84384.0], [68.7, 84384.0], [68.8, 84384.0], [68.9, 84384.0], [69.0, 84384.0], [69.1, 84384.0], [69.2, 84384.0], [69.3, 84384.0], [69.4, 84384.0], [69.5, 84384.0], [69.6, 84384.0], [69.7, 84384.0], [69.8, 84384.0], [69.9, 84384.0], [70.0, 86470.0], [70.1, 86470.0], [70.2, 86470.0], [70.3, 86470.0], [70.4, 86470.0], [70.5, 86470.0], [70.6, 86470.0], [70.7, 86470.0], [70.8, 86470.0], [70.9, 86470.0], [71.0, 86470.0], [71.1, 86470.0], [71.2, 86470.0], [71.3, 86470.0], [71.4, 86470.0], [71.5, 86470.0], [71.6, 86470.0], [71.7, 86470.0], [71.8, 86470.0], [71.9, 86470.0], [72.0, 87167.0], [72.1, 87167.0], [72.2, 87167.0], [72.3, 87167.0], [72.4, 87167.0], [72.5, 87167.0], [72.6, 87167.0], [72.7, 87167.0], [72.8, 87167.0], [72.9, 87167.0], [73.0, 87167.0], [73.1, 87167.0], [73.2, 87167.0], [73.3, 87167.0], [73.4, 87167.0], [73.5, 87167.0], [73.6, 87167.0], [73.7, 87167.0], [73.8, 87167.0], [73.9, 87167.0], [74.0, 89759.0], [74.1, 89759.0], [74.2, 89759.0], [74.3, 89759.0], [74.4, 89759.0], [74.5, 89759.0], [74.6, 89759.0], [74.7, 89759.0], [74.8, 89759.0], [74.9, 89759.0], [75.0, 89759.0], [75.1, 89759.0], [75.2, 89759.0], [75.3, 89759.0], [75.4, 89759.0], [75.5, 89759.0], [75.6, 89759.0], [75.7, 89759.0], [75.8, 89759.0], [75.9, 89759.0], [76.0, 90913.0], [76.1, 90913.0], [76.2, 90913.0], [76.3, 90913.0], [76.4, 90913.0], [76.5, 90913.0], [76.6, 90913.0], [76.7, 90913.0], [76.8, 90913.0], [76.9, 90913.0], [77.0, 90913.0], [77.1, 90913.0], [77.2, 90913.0], [77.3, 90913.0], [77.4, 90913.0], [77.5, 90913.0], [77.6, 90913.0], [77.7, 90913.0], [77.8, 90913.0], [77.9, 90913.0], [78.0, 91026.0], [78.1, 91026.0], [78.2, 91026.0], [78.3, 91026.0], [78.4, 91026.0], [78.5, 91026.0], [78.6, 91026.0], [78.7, 91026.0], [78.8, 91026.0], [78.9, 91026.0], [79.0, 91026.0], [79.1, 91026.0], [79.2, 91026.0], [79.3, 91026.0], [79.4, 91026.0], [79.5, 91026.0], [79.6, 91026.0], [79.7, 91026.0], [79.8, 91026.0], [79.9, 91026.0], [80.0, 91170.0], [80.1, 91170.0], [80.2, 91170.0], [80.3, 91170.0], [80.4, 91170.0], [80.5, 91170.0], [80.6, 91170.0], [80.7, 91170.0], [80.8, 91170.0], [80.9, 91170.0], [81.0, 91170.0], [81.1, 91170.0], [81.2, 91170.0], [81.3, 91170.0], [81.4, 91170.0], [81.5, 91170.0], [81.6, 91170.0], [81.7, 91170.0], [81.8, 91170.0], [81.9, 91170.0], [82.0, 91632.0], [82.1, 91632.0], [82.2, 91632.0], [82.3, 91632.0], [82.4, 91632.0], [82.5, 91632.0], [82.6, 91632.0], [82.7, 91632.0], [82.8, 91632.0], [82.9, 91632.0], [83.0, 91632.0], [83.1, 91632.0], [83.2, 91632.0], [83.3, 91632.0], [83.4, 91632.0], [83.5, 91632.0], [83.6, 91632.0], [83.7, 91632.0], [83.8, 91632.0], [83.9, 91632.0], [84.0, 91663.0], [84.1, 91663.0], [84.2, 91663.0], [84.3, 91663.0], [84.4, 91663.0], [84.5, 91663.0], [84.6, 91663.0], [84.7, 91663.0], [84.8, 91663.0], [84.9, 91663.0], [85.0, 91663.0], [85.1, 91663.0], [85.2, 91663.0], [85.3, 91663.0], [85.4, 91663.0], [85.5, 91663.0], [85.6, 91663.0], [85.7, 91663.0], [85.8, 91663.0], [85.9, 91663.0], [86.0, 91731.0], [86.1, 91731.0], [86.2, 91731.0], [86.3, 91731.0], [86.4, 91731.0], [86.5, 91731.0], [86.6, 91731.0], [86.7, 91731.0], [86.8, 91731.0], [86.9, 91731.0], [87.0, 91731.0], [87.1, 91731.0], [87.2, 91731.0], [87.3, 91731.0], [87.4, 91731.0], [87.5, 91731.0], [87.6, 91731.0], [87.7, 91731.0], [87.8, 91731.0], [87.9, 91731.0], [88.0, 94304.0], [88.1, 94304.0], [88.2, 94304.0], [88.3, 94304.0], [88.4, 94304.0], [88.5, 94304.0], [88.6, 94304.0], [88.7, 94304.0], [88.8, 94304.0], [88.9, 94304.0], [89.0, 94304.0], [89.1, 94304.0], [89.2, 94304.0], [89.3, 94304.0], [89.4, 94304.0], [89.5, 94304.0], [89.6, 94304.0], [89.7, 94304.0], [89.8, 94304.0], [89.9, 94304.0], [90.0, 94690.0], [90.1, 94690.0], [90.2, 94690.0], [90.3, 94690.0], [90.4, 94690.0], [90.5, 94690.0], [90.6, 94690.0], [90.7, 94690.0], [90.8, 94690.0], [90.9, 94690.0], [91.0, 94690.0], [91.1, 94690.0], [91.2, 94690.0], [91.3, 94690.0], [91.4, 94690.0], [91.5, 94690.0], [91.6, 94690.0], [91.7, 94690.0], [91.8, 94690.0], [91.9, 94690.0], [92.0, 96067.0], [92.1, 96067.0], [92.2, 96067.0], [92.3, 96067.0], [92.4, 96067.0], [92.5, 96067.0], [92.6, 96067.0], [92.7, 96067.0], [92.8, 96067.0], [92.9, 96067.0], [93.0, 96067.0], [93.1, 96067.0], [93.2, 96067.0], [93.3, 96067.0], [93.4, 96067.0], [93.5, 96067.0], [93.6, 96067.0], [93.7, 96067.0], [93.8, 96067.0], [93.9, 96067.0], [94.0, 99202.0], [94.1, 99202.0], [94.2, 99202.0], [94.3, 99202.0], [94.4, 99202.0], [94.5, 99202.0], [94.6, 99202.0], [94.7, 99202.0], [94.8, 99202.0], [94.9, 99202.0], [95.0, 99202.0], [95.1, 99202.0], [95.2, 99202.0], [95.3, 99202.0], [95.4, 99202.0], [95.5, 99202.0], [95.6, 99202.0], [95.7, 99202.0], [95.8, 99202.0], [95.9, 99202.0], [96.0, 99993.0], [96.1, 99993.0], [96.2, 99993.0], [96.3, 99993.0], [96.4, 99993.0], [96.5, 99993.0], [96.6, 99993.0], [96.7, 99993.0], [96.8, 99993.0], [96.9, 99993.0], [97.0, 99993.0], [97.1, 99993.0], [97.2, 99993.0], [97.3, 99993.0], [97.4, 99993.0], [97.5, 99993.0], [97.6, 99993.0], [97.7, 99993.0], [97.8, 99993.0], [97.9, 99993.0], [98.0, 100222.0], [98.1, 100222.0], [98.2, 100222.0], [98.3, 100222.0], [98.4, 100222.0], [98.5, 100222.0], [98.6, 100222.0], [98.7, 100222.0], [98.8, 100222.0], [98.9, 100222.0], [99.0, 100222.0], [99.1, 100222.0], [99.2, 100222.0], [99.3, 100222.0], [99.4, 100222.0], [99.5, 100222.0], [99.6, 100222.0], [99.7, 100222.0], [99.8, 100222.0], [99.9, 100222.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4600.0, "maxY": 2.0, "series": [{"data": [[4600.0, 1.0], [72900.0, 1.0], [74300.0, 1.0], [81100.0, 1.0], [84300.0, 1.0], [89700.0, 1.0], [87100.0, 1.0], [91700.0, 1.0], [90900.0, 1.0], [91100.0, 1.0], [94300.0, 1.0], [99900.0, 1.0], [7200.0, 1.0], [9400.0, 1.0], [14800.0, 1.0], [20400.0, 1.0], [25300.0, 1.0], [26700.0, 1.0], [27000.0, 1.0], [30700.0, 1.0], [31600.0, 1.0], [38800.0, 1.0], [38900.0, 1.0], [38500.0, 1.0], [39900.0, 1.0], [40800.0, 1.0], [41300.0, 1.0], [43900.0, 1.0], [44900.0, 1.0], [48800.0, 1.0], [49100.0, 1.0], [52400.0, 1.0], [57400.0, 1.0], [59600.0, 1.0], [61400.0, 1.0], [63300.0, 1.0], [76200.0, 1.0], [73800.0, 1.0], [79400.0, 1.0], [81600.0, 1.0], [78600.0, 1.0], [82000.0, 1.0], [86400.0, 1.0], [91000.0, 1.0], [91600.0, 2.0], [94600.0, 1.0], [96000.0, 1.0], [100200.0, 1.0], [99200.0, 1.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 50.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 50.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.7136873E12, "maxY": 30.10526315789473, "series": [{"data": [[1.71368736E12, 30.10526315789473], [1.71368742E12, 19.5], [1.7136873E12, 6.5], [1.71368748E12, 5.0]], "isOverall": false, "label": "Primer Escenario", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368748E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 38501.0, "minX": 1.0, "maxY": 100222.0, "series": [{"data": [[32.0, 40229.0], [33.0, 44936.0], [2.0, 100222.0], [35.0, 41319.0], [34.0, 43912.0], [37.0, 38501.0], [36.0, 40840.0], [39.0, 38884.5], [38.0, 39984.0], [3.0, 99993.0], [4.0, 91663.0], [5.0, 48150.0], [6.0, 91170.0], [7.0, 96067.0], [8.0, 47216.5], [9.0, 91026.0], [10.0, 47964.0], [11.0, 78613.0], [12.0, 94690.0], [13.0, 90913.0], [14.0, 91731.0], [15.0, 94304.0], [16.0, 52283.5], [1.0, 99202.0], [17.0, 81135.0], [18.0, 81676.0], [19.0, 73855.0], [20.0, 74376.0], [21.0, 82081.0], [22.0, 48379.0], [23.0, 54850.5], [24.0, 79405.0], [25.0, 72970.0], [26.0, 61410.0], [27.0, 39062.0], [28.0, 59644.0], [29.0, 57494.0], [30.0, 49144.0], [31.0, 41572.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}, {"data": [[20.40000000000001, 61970.399999999994]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 39.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6.6, "minX": 1.7136873E12, "maxY": 1.2287098916666666E7, "series": [{"data": [[1.71368736E12, 62.7], [1.71368742E12, 66.0], [1.7136873E12, 6.6], [1.71368748E12, 29.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71368736E12, 1.1672744733333332E7], [1.71368742E12, 1.2287098916666666E7], [1.7136873E12, 1228709.8166666667], [1.71368748E12, 5529194.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368748E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5967.0, "minX": 1.7136873E12, "maxY": 94237.99999999999, "series": [{"data": [[1.71368736E12, 34944.00000000001], [1.71368742E12, 78725.4], [1.7136873E12, 5967.0], [1.71368748E12, 94237.99999999999]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368748E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5963.5, "minX": 1.7136873E12, "maxY": 94237.88888888888, "series": [{"data": [[1.71368736E12, 34943.89473684211], [1.71368742E12, 78725.3], [1.7136873E12, 5963.5], [1.71368748E12, 94237.88888888888]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368748E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 65.77777777777777, "minX": 1.7136873E12, "maxY": 86.0, "series": [{"data": [[1.71368736E12, 67.47368421052632], [1.71368742E12, 67.9], [1.7136873E12, 86.0], [1.71368748E12, 65.77777777777777]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368748E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4668.0, "minX": 1.7136873E12, "maxY": 100222.0, "series": [{"data": [[1.71368736E12, 52407.0], [1.71368742E12, 94690.0], [1.7136873E12, 7266.0], [1.71368748E12, 100222.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71368736E12, 49144.0], [1.71368742E12, 94046.70000000001], [1.7136873E12, 7266.0], [1.71368748E12, 100222.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71368736E12, 52407.0], [1.71368742E12, 94690.0], [1.7136873E12, 7266.0], [1.71368748E12, 100222.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71368736E12, 52407.0], [1.71368742E12, 94670.7], [1.7136873E12, 7266.0], [1.71368748E12, 100222.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71368736E12, 9458.0], [1.71368742E12, 57494.0], [1.7136873E12, 4668.0], [1.71368748E12, 87167.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71368736E12, 38825.0], [1.71368742E12, 80270.0], [1.7136873E12, 5967.0], [1.71368748E12, 91663.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368748E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 44424.0, "minX": 1.0, "maxY": 73412.5, "series": [{"data": [[1.0, 73412.5], [2.0, 44424.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 44424.0, "minX": 1.0, "maxY": 73412.5, "series": [{"data": [[1.0, 73412.5], [2.0, 44424.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.7136873E12, "maxY": 0.65, "series": [{"data": [[1.71368736E12, 0.65], [1.7136873E12, 0.18333333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368736E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7136873E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.71368736E12, 0.31666666666666665], [1.71368742E12, 0.3333333333333333], [1.7136873E12, 0.03333333333333333], [1.71368748E12, 0.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368748E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7136873E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.71368736E12, 0.31666666666666665], [1.71368742E12, 0.3333333333333333], [1.7136873E12, 0.03333333333333333], [1.71368748E12, 0.15]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368748E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7136873E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.71368736E12, 0.31666666666666665], [1.71368742E12, 0.3333333333333333], [1.7136873E12, 0.03333333333333333], [1.71368748E12, 0.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368748E12, "title": "Total Transactions Per Second"}},
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

