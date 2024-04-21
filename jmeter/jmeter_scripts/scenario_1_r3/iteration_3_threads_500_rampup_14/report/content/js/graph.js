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
        data: {"result": {"minY": 134.0, "minX": 0.0, "maxY": 328.0, "series": [{"data": [[0.0, 134.0], [0.1, 134.0], [0.2, 134.0], [0.3, 134.0], [0.4, 134.0], [0.5, 134.0], [0.6, 134.0], [0.7, 134.0], [0.8, 134.0], [0.9, 134.0], [1.0, 134.0], [1.1, 134.0], [1.2, 134.0], [1.3, 134.0], [1.4, 134.0], [1.5, 134.0], [1.6, 134.0], [1.7, 134.0], [1.8, 134.0], [1.9, 134.0], [2.0, 134.0], [2.1, 134.0], [2.2, 134.0], [2.3, 134.0], [2.4, 134.0], [2.5, 134.0], [2.6, 134.0], [2.7, 134.0], [2.8, 134.0], [2.9, 134.0], [3.0, 134.0], [3.1, 134.0], [3.2, 134.0], [3.3, 134.0], [3.4, 134.0], [3.5, 134.0], [3.6, 134.0], [3.7, 134.0], [3.8, 134.0], [3.9, 134.0], [4.0, 135.0], [4.1, 135.0], [4.2, 135.0], [4.3, 135.0], [4.4, 135.0], [4.5, 135.0], [4.6, 135.0], [4.7, 135.0], [4.8, 135.0], [4.9, 135.0], [5.0, 135.0], [5.1, 135.0], [5.2, 135.0], [5.3, 135.0], [5.4, 135.0], [5.5, 135.0], [5.6, 135.0], [5.7, 135.0], [5.8, 135.0], [5.9, 135.0], [6.0, 135.0], [6.1, 135.0], [6.2, 135.0], [6.3, 135.0], [6.4, 135.0], [6.5, 135.0], [6.6, 135.0], [6.7, 135.0], [6.8, 135.0], [6.9, 135.0], [7.0, 135.0], [7.1, 135.0], [7.2, 135.0], [7.3, 135.0], [7.4, 135.0], [7.5, 135.0], [7.6, 135.0], [7.7, 135.0], [7.8, 135.0], [7.9, 135.0], [8.0, 135.0], [8.1, 135.0], [8.2, 135.0], [8.3, 135.0], [8.4, 135.0], [8.5, 135.0], [8.6, 135.0], [8.7, 135.0], [8.8, 135.0], [8.9, 135.0], [9.0, 135.0], [9.1, 135.0], [9.2, 135.0], [9.3, 135.0], [9.4, 135.0], [9.5, 135.0], [9.6, 135.0], [9.7, 135.0], [9.8, 135.0], [9.9, 135.0], [10.0, 135.0], [10.1, 135.0], [10.2, 135.0], [10.3, 135.0], [10.4, 135.0], [10.5, 135.0], [10.6, 135.0], [10.7, 135.0], [10.8, 135.0], [10.9, 135.0], [11.0, 135.0], [11.1, 135.0], [11.2, 135.0], [11.3, 135.0], [11.4, 135.0], [11.5, 135.0], [11.6, 135.0], [11.7, 135.0], [11.8, 135.0], [11.9, 135.0], [12.0, 135.0], [12.1, 135.0], [12.2, 135.0], [12.3, 135.0], [12.4, 135.0], [12.5, 135.0], [12.6, 135.0], [12.7, 135.0], [12.8, 135.0], [12.9, 135.0], [13.0, 135.0], [13.1, 135.0], [13.2, 135.0], [13.3, 135.0], [13.4, 135.0], [13.5, 135.0], [13.6, 135.0], [13.7, 135.0], [13.8, 135.0], [13.9, 135.0], [14.0, 135.0], [14.1, 135.0], [14.2, 135.0], [14.3, 135.0], [14.4, 135.0], [14.5, 135.0], [14.6, 135.0], [14.7, 135.0], [14.8, 135.0], [14.9, 135.0], [15.0, 135.0], [15.1, 135.0], [15.2, 135.0], [15.3, 135.0], [15.4, 135.0], [15.5, 135.0], [15.6, 135.0], [15.7, 135.0], [15.8, 135.0], [15.9, 135.0], [16.0, 135.0], [16.1, 135.0], [16.2, 135.0], [16.3, 135.0], [16.4, 135.0], [16.5, 135.0], [16.6, 135.0], [16.7, 135.0], [16.8, 135.0], [16.9, 135.0], [17.0, 135.0], [17.1, 135.0], [17.2, 135.0], [17.3, 135.0], [17.4, 135.0], [17.5, 135.0], [17.6, 135.0], [17.7, 135.0], [17.8, 135.0], [17.9, 135.0], [18.0, 135.0], [18.1, 135.0], [18.2, 135.0], [18.3, 135.0], [18.4, 135.0], [18.5, 135.0], [18.6, 135.0], [18.7, 135.0], [18.8, 135.0], [18.9, 135.0], [19.0, 135.0], [19.1, 135.0], [19.2, 135.0], [19.3, 135.0], [19.4, 135.0], [19.5, 135.0], [19.6, 135.0], [19.7, 135.0], [19.8, 135.0], [19.9, 135.0], [20.0, 135.0], [20.1, 135.0], [20.2, 135.0], [20.3, 135.0], [20.4, 135.0], [20.5, 135.0], [20.6, 135.0], [20.7, 135.0], [20.8, 135.0], [20.9, 135.0], [21.0, 135.0], [21.1, 135.0], [21.2, 135.0], [21.3, 135.0], [21.4, 135.0], [21.5, 135.0], [21.6, 135.0], [21.7, 135.0], [21.8, 135.0], [21.9, 135.0], [22.0, 135.0], [22.1, 135.0], [22.2, 135.0], [22.3, 135.0], [22.4, 135.0], [22.5, 135.0], [22.6, 136.0], [22.7, 136.0], [22.8, 136.0], [22.9, 136.0], [23.0, 136.0], [23.1, 136.0], [23.2, 136.0], [23.3, 136.0], [23.4, 136.0], [23.5, 136.0], [23.6, 136.0], [23.7, 136.0], [23.8, 136.0], [23.9, 136.0], [24.0, 136.0], [24.1, 136.0], [24.2, 136.0], [24.3, 136.0], [24.4, 136.0], [24.5, 136.0], [24.6, 136.0], [24.7, 136.0], [24.8, 136.0], [24.9, 136.0], [25.0, 136.0], [25.1, 136.0], [25.2, 136.0], [25.3, 136.0], [25.4, 136.0], [25.5, 136.0], [25.6, 136.0], [25.7, 136.0], [25.8, 136.0], [25.9, 136.0], [26.0, 136.0], [26.1, 136.0], [26.2, 136.0], [26.3, 136.0], [26.4, 136.0], [26.5, 136.0], [26.6, 136.0], [26.7, 136.0], [26.8, 136.0], [26.9, 136.0], [27.0, 136.0], [27.1, 136.0], [27.2, 136.0], [27.3, 136.0], [27.4, 136.0], [27.5, 136.0], [27.6, 136.0], [27.7, 136.0], [27.8, 136.0], [27.9, 136.0], [28.0, 136.0], [28.1, 136.0], [28.2, 136.0], [28.3, 136.0], [28.4, 136.0], [28.5, 136.0], [28.6, 136.0], [28.7, 136.0], [28.8, 136.0], [28.9, 136.0], [29.0, 136.0], [29.1, 136.0], [29.2, 136.0], [29.3, 136.0], [29.4, 136.0], [29.5, 136.0], [29.6, 136.0], [29.7, 136.0], [29.8, 136.0], [29.9, 136.0], [30.0, 136.0], [30.1, 136.0], [30.2, 136.0], [30.3, 136.0], [30.4, 136.0], [30.5, 136.0], [30.6, 136.0], [30.7, 136.0], [30.8, 136.0], [30.9, 136.0], [31.0, 136.0], [31.1, 136.0], [31.2, 136.0], [31.3, 136.0], [31.4, 136.0], [31.5, 136.0], [31.6, 136.0], [31.7, 136.0], [31.8, 136.0], [31.9, 136.0], [32.0, 136.0], [32.1, 136.0], [32.2, 136.0], [32.3, 136.0], [32.4, 136.0], [32.5, 136.0], [32.6, 136.0], [32.7, 136.0], [32.8, 136.0], [32.9, 136.0], [33.0, 136.0], [33.1, 136.0], [33.2, 136.0], [33.3, 136.0], [33.4, 136.0], [33.5, 136.0], [33.6, 136.0], [33.7, 136.0], [33.8, 136.0], [33.9, 136.0], [34.0, 136.0], [34.1, 136.0], [34.2, 136.0], [34.3, 136.0], [34.4, 136.0], [34.5, 136.0], [34.6, 136.0], [34.7, 136.0], [34.8, 136.0], [34.9, 136.0], [35.0, 136.0], [35.1, 136.0], [35.2, 136.0], [35.3, 136.0], [35.4, 136.0], [35.5, 136.0], [35.6, 136.0], [35.7, 136.0], [35.8, 136.0], [35.9, 136.0], [36.0, 136.0], [36.1, 136.0], [36.2, 136.0], [36.3, 136.0], [36.4, 136.0], [36.5, 136.0], [36.6, 136.0], [36.7, 136.0], [36.8, 136.0], [36.9, 136.0], [37.0, 136.0], [37.1, 136.0], [37.2, 136.0], [37.3, 136.0], [37.4, 136.0], [37.5, 136.0], [37.6, 136.0], [37.7, 136.0], [37.8, 136.0], [37.9, 136.0], [38.0, 136.0], [38.1, 136.0], [38.2, 136.0], [38.3, 136.0], [38.4, 136.0], [38.5, 136.0], [38.6, 136.0], [38.7, 136.0], [38.8, 136.0], [38.9, 136.0], [39.0, 136.0], [39.1, 136.0], [39.2, 136.0], [39.3, 136.0], [39.4, 136.0], [39.5, 136.0], [39.6, 136.0], [39.7, 136.0], [39.8, 136.0], [39.9, 136.0], [40.0, 136.0], [40.1, 136.0], [40.2, 136.0], [40.3, 136.0], [40.4, 136.0], [40.5, 136.0], [40.6, 136.0], [40.7, 136.0], [40.8, 136.0], [40.9, 136.0], [41.0, 136.0], [41.1, 136.0], [41.2, 136.0], [41.3, 136.0], [41.4, 136.0], [41.5, 136.0], [41.6, 136.0], [41.7, 136.0], [41.8, 136.0], [41.9, 136.0], [42.0, 136.0], [42.1, 136.0], [42.2, 136.0], [42.3, 136.0], [42.4, 136.0], [42.5, 136.0], [42.6, 136.0], [42.7, 136.0], [42.8, 136.0], [42.9, 136.0], [43.0, 136.0], [43.1, 136.0], [43.2, 136.0], [43.3, 136.0], [43.4, 136.0], [43.5, 136.0], [43.6, 136.0], [43.7, 136.0], [43.8, 136.0], [43.9, 136.0], [44.0, 136.0], [44.1, 136.0], [44.2, 136.0], [44.3, 136.0], [44.4, 136.0], [44.5, 136.0], [44.6, 136.0], [44.7, 136.0], [44.8, 136.0], [44.9, 136.0], [45.0, 136.0], [45.1, 136.0], [45.2, 136.0], [45.3, 136.0], [45.4, 136.0], [45.5, 136.0], [45.6, 136.0], [45.7, 136.0], [45.8, 136.0], [45.9, 136.0], [46.0, 136.0], [46.1, 136.0], [46.2, 136.0], [46.3, 136.0], [46.4, 136.0], [46.5, 136.0], [46.6, 136.0], [46.7, 136.0], [46.8, 136.0], [46.9, 136.0], [47.0, 136.0], [47.1, 136.0], [47.2, 136.0], [47.3, 136.0], [47.4, 136.0], [47.5, 136.0], [47.6, 136.0], [47.7, 136.0], [47.8, 136.0], [47.9, 136.0], [48.0, 136.0], [48.1, 136.0], [48.2, 136.0], [48.3, 136.0], [48.4, 136.0], [48.5, 136.0], [48.6, 136.0], [48.7, 136.0], [48.8, 136.0], [48.9, 136.0], [49.0, 136.0], [49.1, 136.0], [49.2, 136.0], [49.3, 136.0], [49.4, 136.0], [49.5, 136.0], [49.6, 136.0], [49.7, 136.0], [49.8, 136.0], [49.9, 136.0], [50.0, 136.0], [50.1, 136.0], [50.2, 136.0], [50.3, 136.0], [50.4, 136.0], [50.5, 136.0], [50.6, 136.0], [50.7, 136.0], [50.8, 136.0], [50.9, 136.0], [51.0, 136.0], [51.1, 136.0], [51.2, 136.0], [51.3, 136.0], [51.4, 136.0], [51.5, 136.0], [51.6, 136.0], [51.7, 136.0], [51.8, 136.0], [51.9, 136.0], [52.0, 136.0], [52.1, 136.0], [52.2, 136.0], [52.3, 136.0], [52.4, 136.0], [52.5, 136.0], [52.6, 136.0], [52.7, 136.0], [52.8, 136.0], [52.9, 136.0], [53.0, 136.0], [53.1, 136.0], [53.2, 136.0], [53.3, 136.0], [53.4, 136.0], [53.5, 136.0], [53.6, 136.0], [53.7, 136.0], [53.8, 136.0], [53.9, 136.0], [54.0, 136.0], [54.1, 136.0], [54.2, 136.0], [54.3, 136.0], [54.4, 136.0], [54.5, 136.0], [54.6, 136.0], [54.7, 136.0], [54.8, 136.0], [54.9, 137.0], [55.0, 137.0], [55.1, 137.0], [55.2, 137.0], [55.3, 137.0], [55.4, 137.0], [55.5, 137.0], [55.6, 137.0], [55.7, 137.0], [55.8, 137.0], [55.9, 137.0], [56.0, 137.0], [56.1, 137.0], [56.2, 137.0], [56.3, 137.0], [56.4, 137.0], [56.5, 137.0], [56.6, 137.0], [56.7, 137.0], [56.8, 137.0], [56.9, 137.0], [57.0, 137.0], [57.1, 137.0], [57.2, 137.0], [57.3, 137.0], [57.4, 137.0], [57.5, 137.0], [57.6, 137.0], [57.7, 137.0], [57.8, 137.0], [57.9, 137.0], [58.0, 137.0], [58.1, 137.0], [58.2, 137.0], [58.3, 137.0], [58.4, 137.0], [58.5, 137.0], [58.6, 137.0], [58.7, 137.0], [58.8, 137.0], [58.9, 137.0], [59.0, 137.0], [59.1, 137.0], [59.2, 137.0], [59.3, 137.0], [59.4, 137.0], [59.5, 137.0], [59.6, 137.0], [59.7, 137.0], [59.8, 137.0], [59.9, 137.0], [60.0, 137.0], [60.1, 137.0], [60.2, 137.0], [60.3, 137.0], [60.4, 137.0], [60.5, 137.0], [60.6, 137.0], [60.7, 137.0], [60.8, 137.0], [60.9, 137.0], [61.0, 137.0], [61.1, 137.0], [61.2, 137.0], [61.3, 137.0], [61.4, 137.0], [61.5, 137.0], [61.6, 137.0], [61.7, 137.0], [61.8, 137.0], [61.9, 137.0], [62.0, 137.0], [62.1, 137.0], [62.2, 137.0], [62.3, 137.0], [62.4, 137.0], [62.5, 137.0], [62.6, 137.0], [62.7, 137.0], [62.8, 137.0], [62.9, 137.0], [63.0, 137.0], [63.1, 137.0], [63.2, 137.0], [63.3, 137.0], [63.4, 137.0], [63.5, 137.0], [63.6, 137.0], [63.7, 137.0], [63.8, 137.0], [63.9, 137.0], [64.0, 137.0], [64.1, 137.0], [64.2, 137.0], [64.3, 137.0], [64.4, 137.0], [64.5, 137.0], [64.6, 137.0], [64.7, 137.0], [64.8, 137.0], [64.9, 137.0], [65.0, 137.0], [65.1, 137.0], [65.2, 137.0], [65.3, 137.0], [65.4, 137.0], [65.5, 137.0], [65.6, 137.0], [65.7, 137.0], [65.8, 137.0], [65.9, 137.0], [66.0, 137.0], [66.1, 137.0], [66.2, 137.0], [66.3, 137.0], [66.4, 137.0], [66.5, 137.0], [66.6, 137.0], [66.7, 137.0], [66.8, 137.0], [66.9, 137.0], [67.0, 137.0], [67.1, 137.0], [67.2, 137.0], [67.3, 137.0], [67.4, 137.0], [67.5, 137.0], [67.6, 137.0], [67.7, 137.0], [67.8, 137.0], [67.9, 137.0], [68.0, 137.0], [68.1, 137.0], [68.2, 137.0], [68.3, 137.0], [68.4, 137.0], [68.5, 137.0], [68.6, 137.0], [68.7, 137.0], [68.8, 137.0], [68.9, 138.0], [69.0, 138.0], [69.1, 138.0], [69.2, 138.0], [69.3, 138.0], [69.4, 138.0], [69.5, 138.0], [69.6, 138.0], [69.7, 138.0], [69.8, 138.0], [69.9, 138.0], [70.0, 138.0], [70.1, 138.0], [70.2, 138.0], [70.3, 138.0], [70.4, 138.0], [70.5, 138.0], [70.6, 138.0], [70.7, 138.0], [70.8, 138.0], [70.9, 138.0], [71.0, 138.0], [71.1, 138.0], [71.2, 138.0], [71.3, 138.0], [71.4, 138.0], [71.5, 138.0], [71.6, 138.0], [71.7, 138.0], [71.8, 138.0], [71.9, 138.0], [72.0, 138.0], [72.1, 138.0], [72.2, 138.0], [72.3, 138.0], [72.4, 138.0], [72.5, 138.0], [72.6, 138.0], [72.7, 138.0], [72.8, 138.0], [72.9, 138.0], [73.0, 138.0], [73.1, 139.0], [73.2, 139.0], [73.3, 139.0], [73.4, 139.0], [73.5, 139.0], [73.6, 139.0], [73.7, 139.0], [73.8, 139.0], [73.9, 139.0], [74.0, 139.0], [74.1, 139.0], [74.2, 139.0], [74.3, 140.0], [74.4, 140.0], [74.5, 140.0], [74.6, 140.0], [74.7, 140.0], [74.8, 140.0], [74.9, 140.0], [75.0, 140.0], [75.1, 140.0], [75.2, 140.0], [75.3, 140.0], [75.4, 140.0], [75.5, 140.0], [75.6, 140.0], [75.7, 141.0], [75.8, 141.0], [75.9, 141.0], [76.0, 141.0], [76.1, 141.0], [76.2, 141.0], [76.3, 141.0], [76.4, 141.0], [76.5, 141.0], [76.6, 141.0], [76.7, 141.0], [76.8, 141.0], [76.9, 142.0], [77.0, 142.0], [77.1, 142.0], [77.2, 142.0], [77.3, 142.0], [77.4, 142.0], [77.5, 142.0], [77.6, 142.0], [77.7, 142.0], [77.8, 142.0], [77.9, 142.0], [78.0, 142.0], [78.1, 143.0], [78.2, 143.0], [78.3, 143.0], [78.4, 143.0], [78.5, 144.0], [78.6, 144.0], [78.7, 144.0], [78.8, 144.0], [78.9, 144.0], [79.0, 144.0], [79.1, 144.0], [79.2, 144.0], [79.3, 145.0], [79.4, 145.0], [79.5, 145.0], [79.6, 145.0], [79.7, 145.0], [79.8, 145.0], [79.9, 146.0], [80.0, 146.0], [80.1, 147.0], [80.2, 147.0], [80.3, 147.0], [80.4, 147.0], [80.5, 170.0], [80.6, 170.0], [80.7, 184.0], [80.8, 184.0], [80.9, 186.0], [81.0, 186.0], [81.1, 197.0], [81.2, 197.0], [81.3, 199.0], [81.4, 199.0], [81.5, 201.0], [81.6, 201.0], [81.7, 204.0], [81.8, 204.0], [81.9, 204.0], [82.0, 204.0], [82.1, 205.0], [82.2, 205.0], [82.3, 206.0], [82.4, 206.0], [82.5, 206.0], [82.6, 206.0], [82.7, 206.0], [82.8, 206.0], [82.9, 208.0], [83.0, 208.0], [83.1, 208.0], [83.2, 208.0], [83.3, 208.0], [83.4, 208.0], [83.5, 209.0], [83.6, 209.0], [83.7, 211.0], [83.8, 211.0], [83.9, 226.0], [84.0, 226.0], [84.1, 228.0], [84.2, 228.0], [84.3, 229.0], [84.4, 229.0], [84.5, 232.0], [84.6, 232.0], [84.7, 236.0], [84.8, 236.0], [84.9, 236.0], [85.0, 236.0], [85.1, 236.0], [85.2, 236.0], [85.3, 242.0], [85.4, 242.0], [85.5, 249.0], [85.6, 249.0], [85.7, 252.0], [85.8, 252.0], [85.9, 253.0], [86.0, 253.0], [86.1, 254.0], [86.2, 254.0], [86.3, 256.0], [86.4, 256.0], [86.5, 257.0], [86.6, 257.0], [86.7, 259.0], [86.8, 259.0], [86.9, 260.0], [87.0, 260.0], [87.1, 261.0], [87.2, 261.0], [87.3, 262.0], [87.4, 262.0], [87.5, 265.0], [87.6, 265.0], [87.7, 269.0], [87.8, 269.0], [87.9, 269.0], [88.0, 269.0], [88.1, 274.0], [88.2, 274.0], [88.3, 275.0], [88.4, 275.0], [88.5, 280.0], [88.6, 280.0], [88.7, 282.0], [88.8, 282.0], [88.9, 283.0], [89.0, 283.0], [89.1, 283.0], [89.2, 283.0], [89.3, 284.0], [89.4, 284.0], [89.5, 284.0], [89.6, 284.0], [89.7, 285.0], [89.8, 285.0], [89.9, 285.0], [90.0, 285.0], [90.1, 287.0], [90.2, 287.0], [90.3, 288.0], [90.4, 288.0], [90.5, 288.0], [90.6, 288.0], [90.7, 289.0], [90.8, 289.0], [90.9, 289.0], [91.0, 289.0], [91.1, 289.0], [91.2, 289.0], [91.3, 289.0], [91.4, 289.0], [91.5, 289.0], [91.6, 289.0], [91.7, 290.0], [91.8, 290.0], [91.9, 290.0], [92.0, 290.0], [92.1, 290.0], [92.2, 290.0], [92.3, 291.0], [92.4, 291.0], [92.5, 291.0], [92.6, 291.0], [92.7, 292.0], [92.8, 292.0], [92.9, 292.0], [93.0, 292.0], [93.1, 293.0], [93.2, 293.0], [93.3, 293.0], [93.4, 293.0], [93.5, 293.0], [93.6, 293.0], [93.7, 294.0], [93.8, 294.0], [93.9, 295.0], [94.0, 295.0], [94.1, 295.0], [94.2, 295.0], [94.3, 295.0], [94.4, 295.0], [94.5, 296.0], [94.6, 296.0], [94.7, 297.0], [94.8, 297.0], [94.9, 297.0], [95.0, 297.0], [95.1, 297.0], [95.2, 297.0], [95.3, 298.0], [95.4, 298.0], [95.5, 300.0], [95.6, 300.0], [95.7, 302.0], [95.8, 302.0], [95.9, 302.0], [96.0, 302.0], [96.1, 304.0], [96.2, 304.0], [96.3, 304.0], [96.4, 304.0], [96.5, 305.0], [96.6, 305.0], [96.7, 305.0], [96.8, 305.0], [96.9, 306.0], [97.0, 306.0], [97.1, 308.0], [97.2, 308.0], [97.3, 310.0], [97.4, 310.0], [97.5, 310.0], [97.6, 310.0], [97.7, 311.0], [97.8, 311.0], [97.9, 311.0], [98.0, 311.0], [98.1, 314.0], [98.2, 314.0], [98.3, 315.0], [98.4, 315.0], [98.5, 315.0], [98.6, 315.0], [98.7, 315.0], [98.8, 315.0], [98.9, 316.0], [99.0, 316.0], [99.1, 317.0], [99.2, 317.0], [99.3, 318.0], [99.4, 318.0], [99.5, 321.0], [99.6, 321.0], [99.7, 322.0], [99.8, 322.0], [99.9, 328.0], [100.0, 328.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 23.0, "minX": 100.0, "maxY": 407.0, "series": [{"data": [[300.0, 23.0], [200.0, 70.0], [100.0, 407.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 500.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 500.0, "series": [{"data": [[0.0, 500.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.456790123456789, "minX": 1.71368472E12, "maxY": 6.334128878281629, "series": [{"data": [[1.71368472E12, 6.334128878281629], [1.71368478E12, 5.456790123456789]], "isOverall": false, "label": "Primer Escenario", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368478E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 135.0, "minX": 1.0, "maxY": 226.5, "series": [{"data": [[8.0, 202.4883720930233], [4.0, 135.0], [2.0, 136.0], [1.0, 136.0], [9.0, 222.5], [10.0, 226.5], [5.0, 135.74233128834354], [6.0, 160.94838709677424], [3.0, 136.0], [13.0, 205.0], [7.0, 181.59166666666664]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}, {"data": [[6.192000000000002, 162.744]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 13.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 469.8, "minX": 1.71368472E12, "maxY": 9413.533333333333, "series": [{"data": [[1.71368472E12, 9413.533333333333], [1.71368478E12, 1819.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71368472E12, 2430.2], [1.71368478E12, 469.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368478E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 141.320987654321, "minX": 1.71368472E12, "maxY": 166.88544152744632, "series": [{"data": [[1.71368472E12, 166.88544152744632], [1.71368478E12, 141.320987654321]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368478E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 141.2716049382717, "minX": 1.71368472E12, "maxY": 166.75656324582343, "series": [{"data": [[1.71368472E12, 166.75656324582343], [1.71368478E12, 141.2716049382717]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368478E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 65.16049382716048, "minX": 1.71368472E12, "maxY": 77.75178997613364, "series": [{"data": [[1.71368472E12, 77.75178997613364], [1.71368478E12, 65.16049382716048]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368478E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 134.0, "minX": 1.71368472E12, "maxY": 328.0, "series": [{"data": [[1.71368472E12, 328.0], [1.71368478E12, 211.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71368472E12, 290.0], [1.71368478E12, 139.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71368472E12, 317.8], [1.71368478E12, 211.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71368472E12, 302.0], [1.71368478E12, 205.49999999999994]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71368472E12, 134.0], [1.71368478E12, 134.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71368472E12, 136.0], [1.71368478E12, 136.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368478E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 136.0, "minX": 7.0, "maxY": 144.0, "series": [{"data": [[34.0, 136.0], [35.0, 136.0], [36.0, 137.0], [37.0, 136.0], [39.0, 136.0], [38.0, 137.0], [25.0, 144.0], [7.0, 136.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 136.0, "minX": 7.0, "maxY": 144.0, "series": [{"data": [[34.0, 136.0], [35.0, 136.0], [36.0, 137.0], [37.0, 136.0], [39.0, 136.0], [38.0, 137.0], [25.0, 144.0], [7.0, 136.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.71368472E12, "maxY": 7.083333333333333, "series": [{"data": [[1.71368472E12, 7.083333333333333], [1.71368478E12, 1.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368478E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.71368472E12, "maxY": 6.983333333333333, "series": [{"data": [[1.71368472E12, 6.983333333333333], [1.71368478E12, 1.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368478E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.71368472E12, "maxY": 6.983333333333333, "series": [{"data": [[1.71368472E12, 6.983333333333333], [1.71368478E12, 1.35]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368478E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.71368472E12, "maxY": 6.983333333333333, "series": [{"data": [[1.71368472E12, 6.983333333333333], [1.71368478E12, 1.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368478E12, "title": "Total Transactions Per Second"}},
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

