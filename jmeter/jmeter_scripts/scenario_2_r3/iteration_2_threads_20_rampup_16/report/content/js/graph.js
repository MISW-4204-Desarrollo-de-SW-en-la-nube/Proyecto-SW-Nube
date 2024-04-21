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
        data: {"result": {"minY": 5078.0, "minX": 0.0, "maxY": 39774.0, "series": [{"data": [[0.0, 5078.0], [0.1, 5078.0], [0.2, 5078.0], [0.3, 5078.0], [0.4, 5078.0], [0.5, 5078.0], [0.6, 5078.0], [0.7, 5078.0], [0.8, 5078.0], [0.9, 5078.0], [1.0, 5078.0], [1.1, 5078.0], [1.2, 5078.0], [1.3, 5078.0], [1.4, 5078.0], [1.5, 5078.0], [1.6, 5078.0], [1.7, 5078.0], [1.8, 5078.0], [1.9, 5078.0], [2.0, 5078.0], [2.1, 5078.0], [2.2, 5078.0], [2.3, 5078.0], [2.4, 5078.0], [2.5, 5078.0], [2.6, 5078.0], [2.7, 5078.0], [2.8, 5078.0], [2.9, 5078.0], [3.0, 5078.0], [3.1, 5078.0], [3.2, 5078.0], [3.3, 5078.0], [3.4, 5078.0], [3.5, 5078.0], [3.6, 5078.0], [3.7, 5078.0], [3.8, 5078.0], [3.9, 5078.0], [4.0, 5078.0], [4.1, 5078.0], [4.2, 5078.0], [4.3, 5078.0], [4.4, 5078.0], [4.5, 5078.0], [4.6, 5078.0], [4.7, 5078.0], [4.8, 5078.0], [4.9, 5078.0], [5.0, 10831.0], [5.1, 10831.0], [5.2, 10831.0], [5.3, 10831.0], [5.4, 10831.0], [5.5, 10831.0], [5.6, 10831.0], [5.7, 10831.0], [5.8, 10831.0], [5.9, 10831.0], [6.0, 10831.0], [6.1, 10831.0], [6.2, 10831.0], [6.3, 10831.0], [6.4, 10831.0], [6.5, 10831.0], [6.6, 10831.0], [6.7, 10831.0], [6.8, 10831.0], [6.9, 10831.0], [7.0, 10831.0], [7.1, 10831.0], [7.2, 10831.0], [7.3, 10831.0], [7.4, 10831.0], [7.5, 10831.0], [7.6, 10831.0], [7.7, 10831.0], [7.8, 10831.0], [7.9, 10831.0], [8.0, 10831.0], [8.1, 10831.0], [8.2, 10831.0], [8.3, 10831.0], [8.4, 10831.0], [8.5, 10831.0], [8.6, 10831.0], [8.7, 10831.0], [8.8, 10831.0], [8.9, 10831.0], [9.0, 10831.0], [9.1, 10831.0], [9.2, 10831.0], [9.3, 10831.0], [9.4, 10831.0], [9.5, 10831.0], [9.6, 10831.0], [9.7, 10831.0], [9.8, 10831.0], [9.9, 10831.0], [10.0, 14503.0], [10.1, 14503.0], [10.2, 14503.0], [10.3, 14503.0], [10.4, 14503.0], [10.5, 14503.0], [10.6, 14503.0], [10.7, 14503.0], [10.8, 14503.0], [10.9, 14503.0], [11.0, 14503.0], [11.1, 14503.0], [11.2, 14503.0], [11.3, 14503.0], [11.4, 14503.0], [11.5, 14503.0], [11.6, 14503.0], [11.7, 14503.0], [11.8, 14503.0], [11.9, 14503.0], [12.0, 14503.0], [12.1, 14503.0], [12.2, 14503.0], [12.3, 14503.0], [12.4, 14503.0], [12.5, 14503.0], [12.6, 14503.0], [12.7, 14503.0], [12.8, 14503.0], [12.9, 14503.0], [13.0, 14503.0], [13.1, 14503.0], [13.2, 14503.0], [13.3, 14503.0], [13.4, 14503.0], [13.5, 14503.0], [13.6, 14503.0], [13.7, 14503.0], [13.8, 14503.0], [13.9, 14503.0], [14.0, 14503.0], [14.1, 14503.0], [14.2, 14503.0], [14.3, 14503.0], [14.4, 14503.0], [14.5, 14503.0], [14.6, 14503.0], [14.7, 14503.0], [14.8, 14503.0], [14.9, 14503.0], [15.0, 19158.0], [15.1, 19158.0], [15.2, 19158.0], [15.3, 19158.0], [15.4, 19158.0], [15.5, 19158.0], [15.6, 19158.0], [15.7, 19158.0], [15.8, 19158.0], [15.9, 19158.0], [16.0, 19158.0], [16.1, 19158.0], [16.2, 19158.0], [16.3, 19158.0], [16.4, 19158.0], [16.5, 19158.0], [16.6, 19158.0], [16.7, 19158.0], [16.8, 19158.0], [16.9, 19158.0], [17.0, 19158.0], [17.1, 19158.0], [17.2, 19158.0], [17.3, 19158.0], [17.4, 19158.0], [17.5, 19158.0], [17.6, 19158.0], [17.7, 19158.0], [17.8, 19158.0], [17.9, 19158.0], [18.0, 19158.0], [18.1, 19158.0], [18.2, 19158.0], [18.3, 19158.0], [18.4, 19158.0], [18.5, 19158.0], [18.6, 19158.0], [18.7, 19158.0], [18.8, 19158.0], [18.9, 19158.0], [19.0, 19158.0], [19.1, 19158.0], [19.2, 19158.0], [19.3, 19158.0], [19.4, 19158.0], [19.5, 19158.0], [19.6, 19158.0], [19.7, 19158.0], [19.8, 19158.0], [19.9, 19158.0], [20.0, 19371.0], [20.1, 19371.0], [20.2, 19371.0], [20.3, 19371.0], [20.4, 19371.0], [20.5, 19371.0], [20.6, 19371.0], [20.7, 19371.0], [20.8, 19371.0], [20.9, 19371.0], [21.0, 19371.0], [21.1, 19371.0], [21.2, 19371.0], [21.3, 19371.0], [21.4, 19371.0], [21.5, 19371.0], [21.6, 19371.0], [21.7, 19371.0], [21.8, 19371.0], [21.9, 19371.0], [22.0, 19371.0], [22.1, 19371.0], [22.2, 19371.0], [22.3, 19371.0], [22.4, 19371.0], [22.5, 19371.0], [22.6, 19371.0], [22.7, 19371.0], [22.8, 19371.0], [22.9, 19371.0], [23.0, 19371.0], [23.1, 19371.0], [23.2, 19371.0], [23.3, 19371.0], [23.4, 19371.0], [23.5, 19371.0], [23.6, 19371.0], [23.7, 19371.0], [23.8, 19371.0], [23.9, 19371.0], [24.0, 19371.0], [24.1, 19371.0], [24.2, 19371.0], [24.3, 19371.0], [24.4, 19371.0], [24.5, 19371.0], [24.6, 19371.0], [24.7, 19371.0], [24.8, 19371.0], [24.9, 19371.0], [25.0, 20878.0], [25.1, 20878.0], [25.2, 20878.0], [25.3, 20878.0], [25.4, 20878.0], [25.5, 20878.0], [25.6, 20878.0], [25.7, 20878.0], [25.8, 20878.0], [25.9, 20878.0], [26.0, 20878.0], [26.1, 20878.0], [26.2, 20878.0], [26.3, 20878.0], [26.4, 20878.0], [26.5, 20878.0], [26.6, 20878.0], [26.7, 20878.0], [26.8, 20878.0], [26.9, 20878.0], [27.0, 20878.0], [27.1, 20878.0], [27.2, 20878.0], [27.3, 20878.0], [27.4, 20878.0], [27.5, 20878.0], [27.6, 20878.0], [27.7, 20878.0], [27.8, 20878.0], [27.9, 20878.0], [28.0, 20878.0], [28.1, 20878.0], [28.2, 20878.0], [28.3, 20878.0], [28.4, 20878.0], [28.5, 20878.0], [28.6, 20878.0], [28.7, 20878.0], [28.8, 20878.0], [28.9, 20878.0], [29.0, 20878.0], [29.1, 20878.0], [29.2, 20878.0], [29.3, 20878.0], [29.4, 20878.0], [29.5, 20878.0], [29.6, 20878.0], [29.7, 20878.0], [29.8, 20878.0], [29.9, 20878.0], [30.0, 25588.0], [30.1, 25588.0], [30.2, 25588.0], [30.3, 25588.0], [30.4, 25588.0], [30.5, 25588.0], [30.6, 25588.0], [30.7, 25588.0], [30.8, 25588.0], [30.9, 25588.0], [31.0, 25588.0], [31.1, 25588.0], [31.2, 25588.0], [31.3, 25588.0], [31.4, 25588.0], [31.5, 25588.0], [31.6, 25588.0], [31.7, 25588.0], [31.8, 25588.0], [31.9, 25588.0], [32.0, 25588.0], [32.1, 25588.0], [32.2, 25588.0], [32.3, 25588.0], [32.4, 25588.0], [32.5, 25588.0], [32.6, 25588.0], [32.7, 25588.0], [32.8, 25588.0], [32.9, 25588.0], [33.0, 25588.0], [33.1, 25588.0], [33.2, 25588.0], [33.3, 25588.0], [33.4, 25588.0], [33.5, 25588.0], [33.6, 25588.0], [33.7, 25588.0], [33.8, 25588.0], [33.9, 25588.0], [34.0, 25588.0], [34.1, 25588.0], [34.2, 25588.0], [34.3, 25588.0], [34.4, 25588.0], [34.5, 25588.0], [34.6, 25588.0], [34.7, 25588.0], [34.8, 25588.0], [34.9, 25588.0], [35.0, 26393.0], [35.1, 26393.0], [35.2, 26393.0], [35.3, 26393.0], [35.4, 26393.0], [35.5, 26393.0], [35.6, 26393.0], [35.7, 26393.0], [35.8, 26393.0], [35.9, 26393.0], [36.0, 26393.0], [36.1, 26393.0], [36.2, 26393.0], [36.3, 26393.0], [36.4, 26393.0], [36.5, 26393.0], [36.6, 26393.0], [36.7, 26393.0], [36.8, 26393.0], [36.9, 26393.0], [37.0, 26393.0], [37.1, 26393.0], [37.2, 26393.0], [37.3, 26393.0], [37.4, 26393.0], [37.5, 26393.0], [37.6, 26393.0], [37.7, 26393.0], [37.8, 26393.0], [37.9, 26393.0], [38.0, 26393.0], [38.1, 26393.0], [38.2, 26393.0], [38.3, 26393.0], [38.4, 26393.0], [38.5, 26393.0], [38.6, 26393.0], [38.7, 26393.0], [38.8, 26393.0], [38.9, 26393.0], [39.0, 26393.0], [39.1, 26393.0], [39.2, 26393.0], [39.3, 26393.0], [39.4, 26393.0], [39.5, 26393.0], [39.6, 26393.0], [39.7, 26393.0], [39.8, 26393.0], [39.9, 26393.0], [40.0, 27007.0], [40.1, 27007.0], [40.2, 27007.0], [40.3, 27007.0], [40.4, 27007.0], [40.5, 27007.0], [40.6, 27007.0], [40.7, 27007.0], [40.8, 27007.0], [40.9, 27007.0], [41.0, 27007.0], [41.1, 27007.0], [41.2, 27007.0], [41.3, 27007.0], [41.4, 27007.0], [41.5, 27007.0], [41.6, 27007.0], [41.7, 27007.0], [41.8, 27007.0], [41.9, 27007.0], [42.0, 27007.0], [42.1, 27007.0], [42.2, 27007.0], [42.3, 27007.0], [42.4, 27007.0], [42.5, 27007.0], [42.6, 27007.0], [42.7, 27007.0], [42.8, 27007.0], [42.9, 27007.0], [43.0, 27007.0], [43.1, 27007.0], [43.2, 27007.0], [43.3, 27007.0], [43.4, 27007.0], [43.5, 27007.0], [43.6, 27007.0], [43.7, 27007.0], [43.8, 27007.0], [43.9, 27007.0], [44.0, 27007.0], [44.1, 27007.0], [44.2, 27007.0], [44.3, 27007.0], [44.4, 27007.0], [44.5, 27007.0], [44.6, 27007.0], [44.7, 27007.0], [44.8, 27007.0], [44.9, 27007.0], [45.0, 29885.0], [45.1, 29885.0], [45.2, 29885.0], [45.3, 29885.0], [45.4, 29885.0], [45.5, 29885.0], [45.6, 29885.0], [45.7, 29885.0], [45.8, 29885.0], [45.9, 29885.0], [46.0, 29885.0], [46.1, 29885.0], [46.2, 29885.0], [46.3, 29885.0], [46.4, 29885.0], [46.5, 29885.0], [46.6, 29885.0], [46.7, 29885.0], [46.8, 29885.0], [46.9, 29885.0], [47.0, 29885.0], [47.1, 29885.0], [47.2, 29885.0], [47.3, 29885.0], [47.4, 29885.0], [47.5, 29885.0], [47.6, 29885.0], [47.7, 29885.0], [47.8, 29885.0], [47.9, 29885.0], [48.0, 29885.0], [48.1, 29885.0], [48.2, 29885.0], [48.3, 29885.0], [48.4, 29885.0], [48.5, 29885.0], [48.6, 29885.0], [48.7, 29885.0], [48.8, 29885.0], [48.9, 29885.0], [49.0, 29885.0], [49.1, 29885.0], [49.2, 29885.0], [49.3, 29885.0], [49.4, 29885.0], [49.5, 29885.0], [49.6, 29885.0], [49.7, 29885.0], [49.8, 29885.0], [49.9, 29885.0], [50.0, 30657.0], [50.1, 30657.0], [50.2, 30657.0], [50.3, 30657.0], [50.4, 30657.0], [50.5, 30657.0], [50.6, 30657.0], [50.7, 30657.0], [50.8, 30657.0], [50.9, 30657.0], [51.0, 30657.0], [51.1, 30657.0], [51.2, 30657.0], [51.3, 30657.0], [51.4, 30657.0], [51.5, 30657.0], [51.6, 30657.0], [51.7, 30657.0], [51.8, 30657.0], [51.9, 30657.0], [52.0, 30657.0], [52.1, 30657.0], [52.2, 30657.0], [52.3, 30657.0], [52.4, 30657.0], [52.5, 30657.0], [52.6, 30657.0], [52.7, 30657.0], [52.8, 30657.0], [52.9, 30657.0], [53.0, 30657.0], [53.1, 30657.0], [53.2, 30657.0], [53.3, 30657.0], [53.4, 30657.0], [53.5, 30657.0], [53.6, 30657.0], [53.7, 30657.0], [53.8, 30657.0], [53.9, 30657.0], [54.0, 30657.0], [54.1, 30657.0], [54.2, 30657.0], [54.3, 30657.0], [54.4, 30657.0], [54.5, 30657.0], [54.6, 30657.0], [54.7, 30657.0], [54.8, 30657.0], [54.9, 30657.0], [55.0, 31001.0], [55.1, 31001.0], [55.2, 31001.0], [55.3, 31001.0], [55.4, 31001.0], [55.5, 31001.0], [55.6, 31001.0], [55.7, 31001.0], [55.8, 31001.0], [55.9, 31001.0], [56.0, 31001.0], [56.1, 31001.0], [56.2, 31001.0], [56.3, 31001.0], [56.4, 31001.0], [56.5, 31001.0], [56.6, 31001.0], [56.7, 31001.0], [56.8, 31001.0], [56.9, 31001.0], [57.0, 31001.0], [57.1, 31001.0], [57.2, 31001.0], [57.3, 31001.0], [57.4, 31001.0], [57.5, 31001.0], [57.6, 31001.0], [57.7, 31001.0], [57.8, 31001.0], [57.9, 31001.0], [58.0, 31001.0], [58.1, 31001.0], [58.2, 31001.0], [58.3, 31001.0], [58.4, 31001.0], [58.5, 31001.0], [58.6, 31001.0], [58.7, 31001.0], [58.8, 31001.0], [58.9, 31001.0], [59.0, 31001.0], [59.1, 31001.0], [59.2, 31001.0], [59.3, 31001.0], [59.4, 31001.0], [59.5, 31001.0], [59.6, 31001.0], [59.7, 31001.0], [59.8, 31001.0], [59.9, 31001.0], [60.0, 31265.0], [60.1, 31265.0], [60.2, 31265.0], [60.3, 31265.0], [60.4, 31265.0], [60.5, 31265.0], [60.6, 31265.0], [60.7, 31265.0], [60.8, 31265.0], [60.9, 31265.0], [61.0, 31265.0], [61.1, 31265.0], [61.2, 31265.0], [61.3, 31265.0], [61.4, 31265.0], [61.5, 31265.0], [61.6, 31265.0], [61.7, 31265.0], [61.8, 31265.0], [61.9, 31265.0], [62.0, 31265.0], [62.1, 31265.0], [62.2, 31265.0], [62.3, 31265.0], [62.4, 31265.0], [62.5, 31265.0], [62.6, 31265.0], [62.7, 31265.0], [62.8, 31265.0], [62.9, 31265.0], [63.0, 31265.0], [63.1, 31265.0], [63.2, 31265.0], [63.3, 31265.0], [63.4, 31265.0], [63.5, 31265.0], [63.6, 31265.0], [63.7, 31265.0], [63.8, 31265.0], [63.9, 31265.0], [64.0, 31265.0], [64.1, 31265.0], [64.2, 31265.0], [64.3, 31265.0], [64.4, 31265.0], [64.5, 31265.0], [64.6, 31265.0], [64.7, 31265.0], [64.8, 31265.0], [64.9, 31265.0], [65.0, 33806.0], [65.1, 33806.0], [65.2, 33806.0], [65.3, 33806.0], [65.4, 33806.0], [65.5, 33806.0], [65.6, 33806.0], [65.7, 33806.0], [65.8, 33806.0], [65.9, 33806.0], [66.0, 33806.0], [66.1, 33806.0], [66.2, 33806.0], [66.3, 33806.0], [66.4, 33806.0], [66.5, 33806.0], [66.6, 33806.0], [66.7, 33806.0], [66.8, 33806.0], [66.9, 33806.0], [67.0, 33806.0], [67.1, 33806.0], [67.2, 33806.0], [67.3, 33806.0], [67.4, 33806.0], [67.5, 33806.0], [67.6, 33806.0], [67.7, 33806.0], [67.8, 33806.0], [67.9, 33806.0], [68.0, 33806.0], [68.1, 33806.0], [68.2, 33806.0], [68.3, 33806.0], [68.4, 33806.0], [68.5, 33806.0], [68.6, 33806.0], [68.7, 33806.0], [68.8, 33806.0], [68.9, 33806.0], [69.0, 33806.0], [69.1, 33806.0], [69.2, 33806.0], [69.3, 33806.0], [69.4, 33806.0], [69.5, 33806.0], [69.6, 33806.0], [69.7, 33806.0], [69.8, 33806.0], [69.9, 33806.0], [70.0, 33953.0], [70.1, 33953.0], [70.2, 33953.0], [70.3, 33953.0], [70.4, 33953.0], [70.5, 33953.0], [70.6, 33953.0], [70.7, 33953.0], [70.8, 33953.0], [70.9, 33953.0], [71.0, 33953.0], [71.1, 33953.0], [71.2, 33953.0], [71.3, 33953.0], [71.4, 33953.0], [71.5, 33953.0], [71.6, 33953.0], [71.7, 33953.0], [71.8, 33953.0], [71.9, 33953.0], [72.0, 33953.0], [72.1, 33953.0], [72.2, 33953.0], [72.3, 33953.0], [72.4, 33953.0], [72.5, 33953.0], [72.6, 33953.0], [72.7, 33953.0], [72.8, 33953.0], [72.9, 33953.0], [73.0, 33953.0], [73.1, 33953.0], [73.2, 33953.0], [73.3, 33953.0], [73.4, 33953.0], [73.5, 33953.0], [73.6, 33953.0], [73.7, 33953.0], [73.8, 33953.0], [73.9, 33953.0], [74.0, 33953.0], [74.1, 33953.0], [74.2, 33953.0], [74.3, 33953.0], [74.4, 33953.0], [74.5, 33953.0], [74.6, 33953.0], [74.7, 33953.0], [74.8, 33953.0], [74.9, 33953.0], [75.0, 34184.0], [75.1, 34184.0], [75.2, 34184.0], [75.3, 34184.0], [75.4, 34184.0], [75.5, 34184.0], [75.6, 34184.0], [75.7, 34184.0], [75.8, 34184.0], [75.9, 34184.0], [76.0, 34184.0], [76.1, 34184.0], [76.2, 34184.0], [76.3, 34184.0], [76.4, 34184.0], [76.5, 34184.0], [76.6, 34184.0], [76.7, 34184.0], [76.8, 34184.0], [76.9, 34184.0], [77.0, 34184.0], [77.1, 34184.0], [77.2, 34184.0], [77.3, 34184.0], [77.4, 34184.0], [77.5, 34184.0], [77.6, 34184.0], [77.7, 34184.0], [77.8, 34184.0], [77.9, 34184.0], [78.0, 34184.0], [78.1, 34184.0], [78.2, 34184.0], [78.3, 34184.0], [78.4, 34184.0], [78.5, 34184.0], [78.6, 34184.0], [78.7, 34184.0], [78.8, 34184.0], [78.9, 34184.0], [79.0, 34184.0], [79.1, 34184.0], [79.2, 34184.0], [79.3, 34184.0], [79.4, 34184.0], [79.5, 34184.0], [79.6, 34184.0], [79.7, 34184.0], [79.8, 34184.0], [79.9, 34184.0], [80.0, 34419.0], [80.1, 34419.0], [80.2, 34419.0], [80.3, 34419.0], [80.4, 34419.0], [80.5, 34419.0], [80.6, 34419.0], [80.7, 34419.0], [80.8, 34419.0], [80.9, 34419.0], [81.0, 34419.0], [81.1, 34419.0], [81.2, 34419.0], [81.3, 34419.0], [81.4, 34419.0], [81.5, 34419.0], [81.6, 34419.0], [81.7, 34419.0], [81.8, 34419.0], [81.9, 34419.0], [82.0, 34419.0], [82.1, 34419.0], [82.2, 34419.0], [82.3, 34419.0], [82.4, 34419.0], [82.5, 34419.0], [82.6, 34419.0], [82.7, 34419.0], [82.8, 34419.0], [82.9, 34419.0], [83.0, 34419.0], [83.1, 34419.0], [83.2, 34419.0], [83.3, 34419.0], [83.4, 34419.0], [83.5, 34419.0], [83.6, 34419.0], [83.7, 34419.0], [83.8, 34419.0], [83.9, 34419.0], [84.0, 34419.0], [84.1, 34419.0], [84.2, 34419.0], [84.3, 34419.0], [84.4, 34419.0], [84.5, 34419.0], [84.6, 34419.0], [84.7, 34419.0], [84.8, 34419.0], [84.9, 34419.0], [85.0, 34451.0], [85.1, 34451.0], [85.2, 34451.0], [85.3, 34451.0], [85.4, 34451.0], [85.5, 34451.0], [85.6, 34451.0], [85.7, 34451.0], [85.8, 34451.0], [85.9, 34451.0], [86.0, 34451.0], [86.1, 34451.0], [86.2, 34451.0], [86.3, 34451.0], [86.4, 34451.0], [86.5, 34451.0], [86.6, 34451.0], [86.7, 34451.0], [86.8, 34451.0], [86.9, 34451.0], [87.0, 34451.0], [87.1, 34451.0], [87.2, 34451.0], [87.3, 34451.0], [87.4, 34451.0], [87.5, 34451.0], [87.6, 34451.0], [87.7, 34451.0], [87.8, 34451.0], [87.9, 34451.0], [88.0, 34451.0], [88.1, 34451.0], [88.2, 34451.0], [88.3, 34451.0], [88.4, 34451.0], [88.5, 34451.0], [88.6, 34451.0], [88.7, 34451.0], [88.8, 34451.0], [88.9, 34451.0], [89.0, 34451.0], [89.1, 34451.0], [89.2, 34451.0], [89.3, 34451.0], [89.4, 34451.0], [89.5, 34451.0], [89.6, 34451.0], [89.7, 34451.0], [89.8, 34451.0], [89.9, 34451.0], [90.0, 37136.0], [90.1, 37136.0], [90.2, 37136.0], [90.3, 37136.0], [90.4, 37136.0], [90.5, 37136.0], [90.6, 37136.0], [90.7, 37136.0], [90.8, 37136.0], [90.9, 37136.0], [91.0, 37136.0], [91.1, 37136.0], [91.2, 37136.0], [91.3, 37136.0], [91.4, 37136.0], [91.5, 37136.0], [91.6, 37136.0], [91.7, 37136.0], [91.8, 37136.0], [91.9, 37136.0], [92.0, 37136.0], [92.1, 37136.0], [92.2, 37136.0], [92.3, 37136.0], [92.4, 37136.0], [92.5, 37136.0], [92.6, 37136.0], [92.7, 37136.0], [92.8, 37136.0], [92.9, 37136.0], [93.0, 37136.0], [93.1, 37136.0], [93.2, 37136.0], [93.3, 37136.0], [93.4, 37136.0], [93.5, 37136.0], [93.6, 37136.0], [93.7, 37136.0], [93.8, 37136.0], [93.9, 37136.0], [94.0, 37136.0], [94.1, 37136.0], [94.2, 37136.0], [94.3, 37136.0], [94.4, 37136.0], [94.5, 37136.0], [94.6, 37136.0], [94.7, 37136.0], [94.8, 37136.0], [94.9, 37136.0], [95.0, 39774.0], [95.1, 39774.0], [95.2, 39774.0], [95.3, 39774.0], [95.4, 39774.0], [95.5, 39774.0], [95.6, 39774.0], [95.7, 39774.0], [95.8, 39774.0], [95.9, 39774.0], [96.0, 39774.0], [96.1, 39774.0], [96.2, 39774.0], [96.3, 39774.0], [96.4, 39774.0], [96.5, 39774.0], [96.6, 39774.0], [96.7, 39774.0], [96.8, 39774.0], [96.9, 39774.0], [97.0, 39774.0], [97.1, 39774.0], [97.2, 39774.0], [97.3, 39774.0], [97.4, 39774.0], [97.5, 39774.0], [97.6, 39774.0], [97.7, 39774.0], [97.8, 39774.0], [97.9, 39774.0], [98.0, 39774.0], [98.1, 39774.0], [98.2, 39774.0], [98.3, 39774.0], [98.4, 39774.0], [98.5, 39774.0], [98.6, 39774.0], [98.7, 39774.0], [98.8, 39774.0], [98.9, 39774.0], [99.0, 39774.0], [99.1, 39774.0], [99.2, 39774.0], [99.3, 39774.0], [99.4, 39774.0], [99.5, 39774.0], [99.6, 39774.0], [99.7, 39774.0], [99.8, 39774.0], [99.9, 39774.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5000.0, "maxY": 2.0, "series": [{"data": [[34400.0, 2.0], [33800.0, 1.0], [33900.0, 1.0], [34100.0, 1.0], [37100.0, 1.0], [39700.0, 1.0], [10800.0, 1.0], [14500.0, 1.0], [19100.0, 1.0], [19300.0, 1.0], [5000.0, 1.0], [20800.0, 1.0], [25500.0, 1.0], [26300.0, 1.0], [27000.0, 1.0], [30600.0, 1.0], [29800.0, 1.0], [31200.0, 1.0], [31000.0, 1.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 39700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.71372126E12, "maxY": 10.882352941176471, "series": [{"data": [[1.71372132E12, 2.0], [1.71372126E12, 10.882352941176471]], "isOverall": false, "label": "Primer Escenario", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71372132E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14503.0, "minX": 1.0, "maxY": 39774.0, "series": [{"data": [[8.0, 29885.0], [2.0, 37136.0], [9.0, 30657.0], [10.0, 34451.0], [11.0, 31265.0], [12.0, 27007.0], [3.0, 34419.0], [13.0, 18209.5], [14.0, 26393.0], [15.0, 20878.0], [16.0, 19371.0], [4.0, 34184.0], [1.0, 39774.0], [17.0, 19158.0], [18.0, 14503.0], [5.0, 31001.0], [6.0, 33953.0], [7.0, 19442.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}, {"data": [[9.55, 26966.9]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 18.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9.9, "minX": 1.71372126E12, "maxY": 1.0444035616666667E7, "series": [{"data": [[1.71372132E12, 9.9], [1.71372126E12, 56.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71372132E12, 1843065.05], [1.71372126E12, 1.0444035616666667E7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71372132E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 25177.0, "minX": 1.71372126E12, "maxY": 37109.666666666664, "series": [{"data": [[1.71372132E12, 37109.666666666664], [1.71372126E12, 25177.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71372132E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 25176.47058823529, "minX": 1.71372126E12, "maxY": 37109.666666666664, "series": [{"data": [[1.71372132E12, 37109.666666666664], [1.71372126E12, 25176.47058823529]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71372132E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 63.666666666666664, "minX": 1.71372126E12, "maxY": 73.70588235294117, "series": [{"data": [[1.71372132E12, 63.666666666666664], [1.71372126E12, 73.70588235294117]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71372132E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5078.0, "minX": 1.71372126E12, "maxY": 39774.0, "series": [{"data": [[1.71372132E12, 39774.0], [1.71372126E12, 34451.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71372132E12, 39774.0], [1.71372126E12, 34237.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71372132E12, 39774.0], [1.71372126E12, 34451.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71372132E12, 39774.0], [1.71372126E12, 34451.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71372132E12, 34419.0], [1.71372126E12, 5078.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71372132E12, 37136.0], [1.71372126E12, 27007.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71372132E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 25990.5, "minX": 1.0, "maxY": 30829.0, "series": [{"data": [[1.0, 30829.0], [2.0, 25990.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 25990.5, "minX": 1.0, "maxY": 30829.0, "series": [{"data": [[1.0, 30829.0], [2.0, 25990.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.71372126E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.71372126E12, 0.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71372126E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.71372126E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.71372132E12, 0.05], [1.71372126E12, 0.2833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71372132E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.71372126E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.71372132E12, 0.05], [1.71372126E12, 0.2833333333333333]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71372132E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.71372126E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.71372132E12, 0.05], [1.71372126E12, 0.2833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71372132E12, "title": "Total Transactions Per Second"}},
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

