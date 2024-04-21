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
        data: {"result": {"minY": 4682.0, "minX": 0.0, "maxY": 109661.0, "series": [{"data": [[0.0, 4682.0], [0.1, 4682.0], [0.2, 4682.0], [0.3, 4682.0], [0.4, 4682.0], [0.5, 4682.0], [0.6, 4682.0], [0.7, 4682.0], [0.8, 4682.0], [0.9, 4682.0], [1.0, 4682.0], [1.1, 4682.0], [1.2, 4682.0], [1.3, 4682.0], [1.4, 4682.0], [1.5, 4682.0], [1.6, 4682.0], [1.7, 4682.0], [1.8, 4682.0], [1.9, 4682.0], [2.0, 8570.0], [2.1, 8570.0], [2.2, 8570.0], [2.3, 8570.0], [2.4, 8570.0], [2.5, 8570.0], [2.6, 8570.0], [2.7, 8570.0], [2.8, 8570.0], [2.9, 8570.0], [3.0, 8570.0], [3.1, 8570.0], [3.2, 8570.0], [3.3, 8570.0], [3.4, 8570.0], [3.5, 8570.0], [3.6, 8570.0], [3.7, 8570.0], [3.8, 8570.0], [3.9, 8570.0], [4.0, 13584.0], [4.1, 13584.0], [4.2, 13584.0], [4.3, 13584.0], [4.4, 13584.0], [4.5, 13584.0], [4.6, 13584.0], [4.7, 13584.0], [4.8, 13584.0], [4.9, 13584.0], [5.0, 13584.0], [5.1, 13584.0], [5.2, 13584.0], [5.3, 13584.0], [5.4, 13584.0], [5.5, 13584.0], [5.6, 13584.0], [5.7, 13584.0], [5.8, 13584.0], [5.9, 13584.0], [6.0, 20684.0], [6.1, 20684.0], [6.2, 20684.0], [6.3, 20684.0], [6.4, 20684.0], [6.5, 20684.0], [6.6, 20684.0], [6.7, 20684.0], [6.8, 20684.0], [6.9, 20684.0], [7.0, 20684.0], [7.1, 20684.0], [7.2, 20684.0], [7.3, 20684.0], [7.4, 20684.0], [7.5, 20684.0], [7.6, 20684.0], [7.7, 20684.0], [7.8, 20684.0], [7.9, 20684.0], [8.0, 22249.0], [8.1, 22249.0], [8.2, 22249.0], [8.3, 22249.0], [8.4, 22249.0], [8.5, 22249.0], [8.6, 22249.0], [8.7, 22249.0], [8.8, 22249.0], [8.9, 22249.0], [9.0, 22249.0], [9.1, 22249.0], [9.2, 22249.0], [9.3, 22249.0], [9.4, 22249.0], [9.5, 22249.0], [9.6, 22249.0], [9.7, 22249.0], [9.8, 22249.0], [9.9, 22249.0], [10.0, 27616.0], [10.1, 27616.0], [10.2, 27616.0], [10.3, 27616.0], [10.4, 27616.0], [10.5, 27616.0], [10.6, 27616.0], [10.7, 27616.0], [10.8, 27616.0], [10.9, 27616.0], [11.0, 27616.0], [11.1, 27616.0], [11.2, 27616.0], [11.3, 27616.0], [11.4, 27616.0], [11.5, 27616.0], [11.6, 27616.0], [11.7, 27616.0], [11.8, 27616.0], [11.9, 27616.0], [12.0, 30226.0], [12.1, 30226.0], [12.2, 30226.0], [12.3, 30226.0], [12.4, 30226.0], [12.5, 30226.0], [12.6, 30226.0], [12.7, 30226.0], [12.8, 30226.0], [12.9, 30226.0], [13.0, 30226.0], [13.1, 30226.0], [13.2, 30226.0], [13.3, 30226.0], [13.4, 30226.0], [13.5, 30226.0], [13.6, 30226.0], [13.7, 30226.0], [13.8, 30226.0], [13.9, 30226.0], [14.0, 30959.0], [14.1, 30959.0], [14.2, 30959.0], [14.3, 30959.0], [14.4, 30959.0], [14.5, 30959.0], [14.6, 30959.0], [14.7, 30959.0], [14.8, 30959.0], [14.9, 30959.0], [15.0, 30959.0], [15.1, 30959.0], [15.2, 30959.0], [15.3, 30959.0], [15.4, 30959.0], [15.5, 30959.0], [15.6, 30959.0], [15.7, 30959.0], [15.8, 30959.0], [15.9, 30959.0], [16.0, 35093.0], [16.1, 35093.0], [16.2, 35093.0], [16.3, 35093.0], [16.4, 35093.0], [16.5, 35093.0], [16.6, 35093.0], [16.7, 35093.0], [16.8, 35093.0], [16.9, 35093.0], [17.0, 35093.0], [17.1, 35093.0], [17.2, 35093.0], [17.3, 35093.0], [17.4, 35093.0], [17.5, 35093.0], [17.6, 35093.0], [17.7, 35093.0], [17.8, 35093.0], [17.9, 35093.0], [18.0, 38868.0], [18.1, 38868.0], [18.2, 38868.0], [18.3, 38868.0], [18.4, 38868.0], [18.5, 38868.0], [18.6, 38868.0], [18.7, 38868.0], [18.8, 38868.0], [18.9, 38868.0], [19.0, 38868.0], [19.1, 38868.0], [19.2, 38868.0], [19.3, 38868.0], [19.4, 38868.0], [19.5, 38868.0], [19.6, 38868.0], [19.7, 38868.0], [19.8, 38868.0], [19.9, 38868.0], [20.0, 43557.0], [20.1, 43557.0], [20.2, 43557.0], [20.3, 43557.0], [20.4, 43557.0], [20.5, 43557.0], [20.6, 43557.0], [20.7, 43557.0], [20.8, 43557.0], [20.9, 43557.0], [21.0, 43557.0], [21.1, 43557.0], [21.2, 43557.0], [21.3, 43557.0], [21.4, 43557.0], [21.5, 43557.0], [21.6, 43557.0], [21.7, 43557.0], [21.8, 43557.0], [21.9, 43557.0], [22.0, 43711.0], [22.1, 43711.0], [22.2, 43711.0], [22.3, 43711.0], [22.4, 43711.0], [22.5, 43711.0], [22.6, 43711.0], [22.7, 43711.0], [22.8, 43711.0], [22.9, 43711.0], [23.0, 43711.0], [23.1, 43711.0], [23.2, 43711.0], [23.3, 43711.0], [23.4, 43711.0], [23.5, 43711.0], [23.6, 43711.0], [23.7, 43711.0], [23.8, 43711.0], [23.9, 43711.0], [24.0, 45319.0], [24.1, 45319.0], [24.2, 45319.0], [24.3, 45319.0], [24.4, 45319.0], [24.5, 45319.0], [24.6, 45319.0], [24.7, 45319.0], [24.8, 45319.0], [24.9, 45319.0], [25.0, 45319.0], [25.1, 45319.0], [25.2, 45319.0], [25.3, 45319.0], [25.4, 45319.0], [25.5, 45319.0], [25.6, 45319.0], [25.7, 45319.0], [25.8, 45319.0], [25.9, 45319.0], [26.0, 48383.0], [26.1, 48383.0], [26.2, 48383.0], [26.3, 48383.0], [26.4, 48383.0], [26.5, 48383.0], [26.6, 48383.0], [26.7, 48383.0], [26.8, 48383.0], [26.9, 48383.0], [27.0, 48383.0], [27.1, 48383.0], [27.2, 48383.0], [27.3, 48383.0], [27.4, 48383.0], [27.5, 48383.0], [27.6, 48383.0], [27.7, 48383.0], [27.8, 48383.0], [27.9, 48383.0], [28.0, 55114.0], [28.1, 55114.0], [28.2, 55114.0], [28.3, 55114.0], [28.4, 55114.0], [28.5, 55114.0], [28.6, 55114.0], [28.7, 55114.0], [28.8, 55114.0], [28.9, 55114.0], [29.0, 55114.0], [29.1, 55114.0], [29.2, 55114.0], [29.3, 55114.0], [29.4, 55114.0], [29.5, 55114.0], [29.6, 55114.0], [29.7, 55114.0], [29.8, 55114.0], [29.9, 55114.0], [30.0, 56666.0], [30.1, 56666.0], [30.2, 56666.0], [30.3, 56666.0], [30.4, 56666.0], [30.5, 56666.0], [30.6, 56666.0], [30.7, 56666.0], [30.8, 56666.0], [30.9, 56666.0], [31.0, 56666.0], [31.1, 56666.0], [31.2, 56666.0], [31.3, 56666.0], [31.4, 56666.0], [31.5, 56666.0], [31.6, 56666.0], [31.7, 56666.0], [31.8, 56666.0], [31.9, 56666.0], [32.0, 57479.0], [32.1, 57479.0], [32.2, 57479.0], [32.3, 57479.0], [32.4, 57479.0], [32.5, 57479.0], [32.6, 57479.0], [32.7, 57479.0], [32.8, 57479.0], [32.9, 57479.0], [33.0, 57479.0], [33.1, 57479.0], [33.2, 57479.0], [33.3, 57479.0], [33.4, 57479.0], [33.5, 57479.0], [33.6, 57479.0], [33.7, 57479.0], [33.8, 57479.0], [33.9, 57479.0], [34.0, 57713.0], [34.1, 57713.0], [34.2, 57713.0], [34.3, 57713.0], [34.4, 57713.0], [34.5, 57713.0], [34.6, 57713.0], [34.7, 57713.0], [34.8, 57713.0], [34.9, 57713.0], [35.0, 57713.0], [35.1, 57713.0], [35.2, 57713.0], [35.3, 57713.0], [35.4, 57713.0], [35.5, 57713.0], [35.6, 57713.0], [35.7, 57713.0], [35.8, 57713.0], [35.9, 57713.0], [36.0, 58426.0], [36.1, 58426.0], [36.2, 58426.0], [36.3, 58426.0], [36.4, 58426.0], [36.5, 58426.0], [36.6, 58426.0], [36.7, 58426.0], [36.8, 58426.0], [36.9, 58426.0], [37.0, 58426.0], [37.1, 58426.0], [37.2, 58426.0], [37.3, 58426.0], [37.4, 58426.0], [37.5, 58426.0], [37.6, 58426.0], [37.7, 58426.0], [37.8, 58426.0], [37.9, 58426.0], [38.0, 62052.0], [38.1, 62052.0], [38.2, 62052.0], [38.3, 62052.0], [38.4, 62052.0], [38.5, 62052.0], [38.6, 62052.0], [38.7, 62052.0], [38.8, 62052.0], [38.9, 62052.0], [39.0, 62052.0], [39.1, 62052.0], [39.2, 62052.0], [39.3, 62052.0], [39.4, 62052.0], [39.5, 62052.0], [39.6, 62052.0], [39.7, 62052.0], [39.8, 62052.0], [39.9, 62052.0], [40.0, 64423.0], [40.1, 64423.0], [40.2, 64423.0], [40.3, 64423.0], [40.4, 64423.0], [40.5, 64423.0], [40.6, 64423.0], [40.7, 64423.0], [40.8, 64423.0], [40.9, 64423.0], [41.0, 64423.0], [41.1, 64423.0], [41.2, 64423.0], [41.3, 64423.0], [41.4, 64423.0], [41.5, 64423.0], [41.6, 64423.0], [41.7, 64423.0], [41.8, 64423.0], [41.9, 64423.0], [42.0, 66705.0], [42.1, 66705.0], [42.2, 66705.0], [42.3, 66705.0], [42.4, 66705.0], [42.5, 66705.0], [42.6, 66705.0], [42.7, 66705.0], [42.8, 66705.0], [42.9, 66705.0], [43.0, 66705.0], [43.1, 66705.0], [43.2, 66705.0], [43.3, 66705.0], [43.4, 66705.0], [43.5, 66705.0], [43.6, 66705.0], [43.7, 66705.0], [43.8, 66705.0], [43.9, 66705.0], [44.0, 67323.0], [44.1, 67323.0], [44.2, 67323.0], [44.3, 67323.0], [44.4, 67323.0], [44.5, 67323.0], [44.6, 67323.0], [44.7, 67323.0], [44.8, 67323.0], [44.9, 67323.0], [45.0, 67323.0], [45.1, 67323.0], [45.2, 67323.0], [45.3, 67323.0], [45.4, 67323.0], [45.5, 67323.0], [45.6, 67323.0], [45.7, 67323.0], [45.8, 67323.0], [45.9, 67323.0], [46.0, 71473.0], [46.1, 71473.0], [46.2, 71473.0], [46.3, 71473.0], [46.4, 71473.0], [46.5, 71473.0], [46.6, 71473.0], [46.7, 71473.0], [46.8, 71473.0], [46.9, 71473.0], [47.0, 71473.0], [47.1, 71473.0], [47.2, 71473.0], [47.3, 71473.0], [47.4, 71473.0], [47.5, 71473.0], [47.6, 71473.0], [47.7, 71473.0], [47.8, 71473.0], [47.9, 71473.0], [48.0, 72806.0], [48.1, 72806.0], [48.2, 72806.0], [48.3, 72806.0], [48.4, 72806.0], [48.5, 72806.0], [48.6, 72806.0], [48.7, 72806.0], [48.8, 72806.0], [48.9, 72806.0], [49.0, 72806.0], [49.1, 72806.0], [49.2, 72806.0], [49.3, 72806.0], [49.4, 72806.0], [49.5, 72806.0], [49.6, 72806.0], [49.7, 72806.0], [49.8, 72806.0], [49.9, 72806.0], [50.0, 74959.0], [50.1, 74959.0], [50.2, 74959.0], [50.3, 74959.0], [50.4, 74959.0], [50.5, 74959.0], [50.6, 74959.0], [50.7, 74959.0], [50.8, 74959.0], [50.9, 74959.0], [51.0, 74959.0], [51.1, 74959.0], [51.2, 74959.0], [51.3, 74959.0], [51.4, 74959.0], [51.5, 74959.0], [51.6, 74959.0], [51.7, 74959.0], [51.8, 74959.0], [51.9, 74959.0], [52.0, 75521.0], [52.1, 75521.0], [52.2, 75521.0], [52.3, 75521.0], [52.4, 75521.0], [52.5, 75521.0], [52.6, 75521.0], [52.7, 75521.0], [52.8, 75521.0], [52.9, 75521.0], [53.0, 75521.0], [53.1, 75521.0], [53.2, 75521.0], [53.3, 75521.0], [53.4, 75521.0], [53.5, 75521.0], [53.6, 75521.0], [53.7, 75521.0], [53.8, 75521.0], [53.9, 75521.0], [54.0, 77636.0], [54.1, 77636.0], [54.2, 77636.0], [54.3, 77636.0], [54.4, 77636.0], [54.5, 77636.0], [54.6, 77636.0], [54.7, 77636.0], [54.8, 77636.0], [54.9, 77636.0], [55.0, 77636.0], [55.1, 77636.0], [55.2, 77636.0], [55.3, 77636.0], [55.4, 77636.0], [55.5, 77636.0], [55.6, 77636.0], [55.7, 77636.0], [55.8, 77636.0], [55.9, 77636.0], [56.0, 79532.0], [56.1, 79532.0], [56.2, 79532.0], [56.3, 79532.0], [56.4, 79532.0], [56.5, 79532.0], [56.6, 79532.0], [56.7, 79532.0], [56.8, 79532.0], [56.9, 79532.0], [57.0, 79532.0], [57.1, 79532.0], [57.2, 79532.0], [57.3, 79532.0], [57.4, 79532.0], [57.5, 79532.0], [57.6, 79532.0], [57.7, 79532.0], [57.8, 79532.0], [57.9, 79532.0], [58.0, 81216.0], [58.1, 81216.0], [58.2, 81216.0], [58.3, 81216.0], [58.4, 81216.0], [58.5, 81216.0], [58.6, 81216.0], [58.7, 81216.0], [58.8, 81216.0], [58.9, 81216.0], [59.0, 81216.0], [59.1, 81216.0], [59.2, 81216.0], [59.3, 81216.0], [59.4, 81216.0], [59.5, 81216.0], [59.6, 81216.0], [59.7, 81216.0], [59.8, 81216.0], [59.9, 81216.0], [60.0, 83097.0], [60.1, 83097.0], [60.2, 83097.0], [60.3, 83097.0], [60.4, 83097.0], [60.5, 83097.0], [60.6, 83097.0], [60.7, 83097.0], [60.8, 83097.0], [60.9, 83097.0], [61.0, 83097.0], [61.1, 83097.0], [61.2, 83097.0], [61.3, 83097.0], [61.4, 83097.0], [61.5, 83097.0], [61.6, 83097.0], [61.7, 83097.0], [61.8, 83097.0], [61.9, 83097.0], [62.0, 86806.0], [62.1, 86806.0], [62.2, 86806.0], [62.3, 86806.0], [62.4, 86806.0], [62.5, 86806.0], [62.6, 86806.0], [62.7, 86806.0], [62.8, 86806.0], [62.9, 86806.0], [63.0, 86806.0], [63.1, 86806.0], [63.2, 86806.0], [63.3, 86806.0], [63.4, 86806.0], [63.5, 86806.0], [63.6, 86806.0], [63.7, 86806.0], [63.8, 86806.0], [63.9, 86806.0], [64.0, 88020.0], [64.1, 88020.0], [64.2, 88020.0], [64.3, 88020.0], [64.4, 88020.0], [64.5, 88020.0], [64.6, 88020.0], [64.7, 88020.0], [64.8, 88020.0], [64.9, 88020.0], [65.0, 88020.0], [65.1, 88020.0], [65.2, 88020.0], [65.3, 88020.0], [65.4, 88020.0], [65.5, 88020.0], [65.6, 88020.0], [65.7, 88020.0], [65.8, 88020.0], [65.9, 88020.0], [66.0, 88823.0], [66.1, 88823.0], [66.2, 88823.0], [66.3, 88823.0], [66.4, 88823.0], [66.5, 88823.0], [66.6, 88823.0], [66.7, 88823.0], [66.8, 88823.0], [66.9, 88823.0], [67.0, 88823.0], [67.1, 88823.0], [67.2, 88823.0], [67.3, 88823.0], [67.4, 88823.0], [67.5, 88823.0], [67.6, 88823.0], [67.7, 88823.0], [67.8, 88823.0], [67.9, 88823.0], [68.0, 89773.0], [68.1, 89773.0], [68.2, 89773.0], [68.3, 89773.0], [68.4, 89773.0], [68.5, 89773.0], [68.6, 89773.0], [68.7, 89773.0], [68.8, 89773.0], [68.9, 89773.0], [69.0, 89773.0], [69.1, 89773.0], [69.2, 89773.0], [69.3, 89773.0], [69.4, 89773.0], [69.5, 89773.0], [69.6, 89773.0], [69.7, 89773.0], [69.8, 89773.0], [69.9, 89773.0], [70.0, 93441.0], [70.1, 93441.0], [70.2, 93441.0], [70.3, 93441.0], [70.4, 93441.0], [70.5, 93441.0], [70.6, 93441.0], [70.7, 93441.0], [70.8, 93441.0], [70.9, 93441.0], [71.0, 93441.0], [71.1, 93441.0], [71.2, 93441.0], [71.3, 93441.0], [71.4, 93441.0], [71.5, 93441.0], [71.6, 93441.0], [71.7, 93441.0], [71.8, 93441.0], [71.9, 93441.0], [72.0, 94229.0], [72.1, 94229.0], [72.2, 94229.0], [72.3, 94229.0], [72.4, 94229.0], [72.5, 94229.0], [72.6, 94229.0], [72.7, 94229.0], [72.8, 94229.0], [72.9, 94229.0], [73.0, 94229.0], [73.1, 94229.0], [73.2, 94229.0], [73.3, 94229.0], [73.4, 94229.0], [73.5, 94229.0], [73.6, 94229.0], [73.7, 94229.0], [73.8, 94229.0], [73.9, 94229.0], [74.0, 95164.0], [74.1, 95164.0], [74.2, 95164.0], [74.3, 95164.0], [74.4, 95164.0], [74.5, 95164.0], [74.6, 95164.0], [74.7, 95164.0], [74.8, 95164.0], [74.9, 95164.0], [75.0, 95164.0], [75.1, 95164.0], [75.2, 95164.0], [75.3, 95164.0], [75.4, 95164.0], [75.5, 95164.0], [75.6, 95164.0], [75.7, 95164.0], [75.8, 95164.0], [75.9, 95164.0], [76.0, 95380.0], [76.1, 95380.0], [76.2, 95380.0], [76.3, 95380.0], [76.4, 95380.0], [76.5, 95380.0], [76.6, 95380.0], [76.7, 95380.0], [76.8, 95380.0], [76.9, 95380.0], [77.0, 95380.0], [77.1, 95380.0], [77.2, 95380.0], [77.3, 95380.0], [77.4, 95380.0], [77.5, 95380.0], [77.6, 95380.0], [77.7, 95380.0], [77.8, 95380.0], [77.9, 95380.0], [78.0, 96369.0], [78.1, 96369.0], [78.2, 96369.0], [78.3, 96369.0], [78.4, 96369.0], [78.5, 96369.0], [78.6, 96369.0], [78.7, 96369.0], [78.8, 96369.0], [78.9, 96369.0], [79.0, 96369.0], [79.1, 96369.0], [79.2, 96369.0], [79.3, 96369.0], [79.4, 96369.0], [79.5, 96369.0], [79.6, 96369.0], [79.7, 96369.0], [79.8, 96369.0], [79.9, 96369.0], [80.0, 96994.0], [80.1, 96994.0], [80.2, 96994.0], [80.3, 96994.0], [80.4, 96994.0], [80.5, 96994.0], [80.6, 96994.0], [80.7, 96994.0], [80.8, 96994.0], [80.9, 96994.0], [81.0, 96994.0], [81.1, 96994.0], [81.2, 96994.0], [81.3, 96994.0], [81.4, 96994.0], [81.5, 96994.0], [81.6, 96994.0], [81.7, 96994.0], [81.8, 96994.0], [81.9, 96994.0], [82.0, 97208.0], [82.1, 97208.0], [82.2, 97208.0], [82.3, 97208.0], [82.4, 97208.0], [82.5, 97208.0], [82.6, 97208.0], [82.7, 97208.0], [82.8, 97208.0], [82.9, 97208.0], [83.0, 97208.0], [83.1, 97208.0], [83.2, 97208.0], [83.3, 97208.0], [83.4, 97208.0], [83.5, 97208.0], [83.6, 97208.0], [83.7, 97208.0], [83.8, 97208.0], [83.9, 97208.0], [84.0, 101029.0], [84.1, 101029.0], [84.2, 101029.0], [84.3, 101029.0], [84.4, 101029.0], [84.5, 101029.0], [84.6, 101029.0], [84.7, 101029.0], [84.8, 101029.0], [84.9, 101029.0], [85.0, 101029.0], [85.1, 101029.0], [85.2, 101029.0], [85.3, 101029.0], [85.4, 101029.0], [85.5, 101029.0], [85.6, 101029.0], [85.7, 101029.0], [85.8, 101029.0], [85.9, 101029.0], [86.0, 101045.0], [86.1, 101045.0], [86.2, 101045.0], [86.3, 101045.0], [86.4, 101045.0], [86.5, 101045.0], [86.6, 101045.0], [86.7, 101045.0], [86.8, 101045.0], [86.9, 101045.0], [87.0, 101045.0], [87.1, 101045.0], [87.2, 101045.0], [87.3, 101045.0], [87.4, 101045.0], [87.5, 101045.0], [87.6, 101045.0], [87.7, 101045.0], [87.8, 101045.0], [87.9, 101045.0], [88.0, 103025.0], [88.1, 103025.0], [88.2, 103025.0], [88.3, 103025.0], [88.4, 103025.0], [88.5, 103025.0], [88.6, 103025.0], [88.7, 103025.0], [88.8, 103025.0], [88.9, 103025.0], [89.0, 103025.0], [89.1, 103025.0], [89.2, 103025.0], [89.3, 103025.0], [89.4, 103025.0], [89.5, 103025.0], [89.6, 103025.0], [89.7, 103025.0], [89.8, 103025.0], [89.9, 103025.0], [90.0, 103914.0], [90.1, 103914.0], [90.2, 103914.0], [90.3, 103914.0], [90.4, 103914.0], [90.5, 103914.0], [90.6, 103914.0], [90.7, 103914.0], [90.8, 103914.0], [90.9, 103914.0], [91.0, 103914.0], [91.1, 103914.0], [91.2, 103914.0], [91.3, 103914.0], [91.4, 103914.0], [91.5, 103914.0], [91.6, 103914.0], [91.7, 103914.0], [91.8, 103914.0], [91.9, 103914.0], [92.0, 106304.0], [92.1, 106304.0], [92.2, 106304.0], [92.3, 106304.0], [92.4, 106304.0], [92.5, 106304.0], [92.6, 106304.0], [92.7, 106304.0], [92.8, 106304.0], [92.9, 106304.0], [93.0, 106304.0], [93.1, 106304.0], [93.2, 106304.0], [93.3, 106304.0], [93.4, 106304.0], [93.5, 106304.0], [93.6, 106304.0], [93.7, 106304.0], [93.8, 106304.0], [93.9, 106304.0], [94.0, 107600.0], [94.1, 107600.0], [94.2, 107600.0], [94.3, 107600.0], [94.4, 107600.0], [94.5, 107600.0], [94.6, 107600.0], [94.7, 107600.0], [94.8, 107600.0], [94.9, 107600.0], [95.0, 107600.0], [95.1, 107600.0], [95.2, 107600.0], [95.3, 107600.0], [95.4, 107600.0], [95.5, 107600.0], [95.6, 107600.0], [95.7, 107600.0], [95.8, 107600.0], [95.9, 107600.0], [96.0, 109077.0], [96.1, 109077.0], [96.2, 109077.0], [96.3, 109077.0], [96.4, 109077.0], [96.5, 109077.0], [96.6, 109077.0], [96.7, 109077.0], [96.8, 109077.0], [96.9, 109077.0], [97.0, 109077.0], [97.1, 109077.0], [97.2, 109077.0], [97.3, 109077.0], [97.4, 109077.0], [97.5, 109077.0], [97.6, 109077.0], [97.7, 109077.0], [97.8, 109077.0], [97.9, 109077.0], [98.0, 109661.0], [98.1, 109661.0], [98.2, 109661.0], [98.3, 109661.0], [98.4, 109661.0], [98.5, 109661.0], [98.6, 109661.0], [98.7, 109661.0], [98.8, 109661.0], [98.9, 109661.0], [99.0, 109661.0], [99.1, 109661.0], [99.2, 109661.0], [99.3, 109661.0], [99.4, 109661.0], [99.5, 109661.0], [99.6, 109661.0], [99.7, 109661.0], [99.8, 109661.0], [99.9, 109661.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4600.0, "maxY": 2.0, "series": [{"data": [[67300.0, 1.0], [66700.0, 1.0], [4600.0, 1.0], [75500.0, 1.0], [74900.0, 1.0], [79500.0, 1.0], [89700.0, 1.0], [96300.0, 1.0], [95100.0, 1.0], [96900.0, 1.0], [95300.0, 1.0], [106300.0, 1.0], [103900.0, 1.0], [8500.0, 1.0], [13500.0, 1.0], [20600.0, 1.0], [22200.0, 1.0], [27600.0, 1.0], [30200.0, 1.0], [30900.0, 1.0], [35000.0, 1.0], [38800.0, 1.0], [43500.0, 1.0], [43700.0, 1.0], [45300.0, 1.0], [48300.0, 1.0], [55100.0, 1.0], [56600.0, 1.0], [57400.0, 1.0], [57700.0, 1.0], [58400.0, 1.0], [62000.0, 1.0], [64400.0, 1.0], [71400.0, 1.0], [72800.0, 1.0], [77600.0, 1.0], [81200.0, 1.0], [83000.0, 1.0], [88800.0, 1.0], [88000.0, 1.0], [86800.0, 1.0], [94200.0, 1.0], [93400.0, 1.0], [97200.0, 1.0], [101000.0, 2.0], [103000.0, 1.0], [109000.0, 1.0], [107600.0, 1.0], [109600.0, 1.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 109600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.71368748E12, "maxY": 33.64285714285714, "series": [{"data": [[1.71368754E12, 33.64285714285714], [1.7136876E12, 24.043478260869566], [1.71368766E12, 6.5], [1.71368748E12, 6.0]], "isOverall": false, "label": "Primer Escenario", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368766E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 33351.0, "minX": 1.0, "maxY": 109661.0, "series": [{"data": [[32.0, 43021.0], [33.0, 57713.0], [2.0, 107600.0], [35.0, 57072.5], [37.0, 48383.0], [36.0, 55114.0], [39.0, 43711.0], [38.0, 45319.0], [41.0, 33351.0], [40.0, 43557.0], [42.0, 35093.0], [3.0, 103914.0], [4.0, 101029.0], [5.0, 106304.0], [6.0, 52863.5], [7.0, 109077.0], [8.0, 95380.0], [9.0, 96994.0], [10.0, 103025.0], [11.0, 52889.0], [12.0, 93441.0], [13.0, 95164.0], [14.0, 94229.0], [15.0, 86806.0], [16.0, 88020.0], [1.0, 109661.0], [17.0, 96369.0], [18.0, 83097.0], [19.0, 51678.5], [20.0, 88823.0], [21.0, 81216.0], [22.0, 79532.0], [23.0, 77636.0], [24.0, 72806.0], [25.0, 47821.5], [26.0, 75521.0], [27.0, 66705.0], [28.0, 71473.0], [29.0, 44786.0], [30.0, 64423.0], [31.0, 62052.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}, {"data": [[22.160000000000007, 68790.08]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 42.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3.3, "minX": 1.71368748E12, "maxY": 1.4130163516666668E7, "series": [{"data": [[1.71368754E12, 46.2], [1.7136876E12, 75.9], [1.71368766E12, 39.6], [1.71368748E12, 3.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71368754E12, 8600969.416666666], [1.7136876E12, 1.4130163516666668E7], [1.71368766E12, 7372259.75], [1.71368748E12, 614355.2333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368766E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4682.0, "minX": 1.71368748E12, "maxY": 102056.49999999999, "series": [{"data": [[1.71368754E12, 33138.07142857142], [1.7136876E12, 75922.21739130435], [1.71368766E12, 102056.49999999999], [1.71368748E12, 4682.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368766E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4677.0, "minX": 1.71368748E12, "maxY": 102056.49999999999, "series": [{"data": [[1.71368754E12, 33137.857142857145], [1.7136876E12, 75922.08695652176], [1.71368766E12, 102056.49999999999], [1.71368748E12, 4677.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368766E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 66.21739130434783, "minX": 1.71368748E12, "maxY": 102.0, "series": [{"data": [[1.71368754E12, 66.49999999999999], [1.7136876E12, 66.21739130434783], [1.71368766E12, 71.33333333333334], [1.71368748E12, 102.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368766E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4682.0, "minX": 1.71368748E12, "maxY": 109661.0, "series": [{"data": [[1.71368754E12, 55114.0], [1.7136876E12, 96369.0], [1.71368766E12, 109661.0], [1.71368748E12, 4682.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71368754E12, 51748.5], [1.7136876E12, 94790.0], [1.71368766E12, 109485.8], [1.71368748E12, 4682.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71368754E12, 55114.0], [1.7136876E12, 96369.0], [1.71368766E12, 109661.0], [1.71368748E12, 4682.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71368754E12, 55114.0], [1.7136876E12, 96128.0], [1.71368766E12, 109661.0], [1.71368748E12, 4682.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71368754E12, 8570.0], [1.7136876E12, 56666.0], [1.71368766E12, 93441.0], [1.71368748E12, 4682.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71368754E12, 33026.0], [1.7136876E12, 75521.0], [1.71368766E12, 102035.0], [1.71368748E12, 4682.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368766E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 73882.5, "minX": 1.0, "maxY": 76429.5, "series": [{"data": [[1.0, 73882.5], [2.0, 76429.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 73882.5, "minX": 1.0, "maxY": 76429.5, "series": [{"data": [[1.0, 73882.5], [2.0, 76429.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71368748E12, "maxY": 0.7, "series": [{"data": [[1.71368754E12, 0.7], [1.71368748E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368754E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71368748E12, "maxY": 0.38333333333333336, "series": [{"data": [[1.71368754E12, 0.23333333333333334], [1.7136876E12, 0.38333333333333336], [1.71368766E12, 0.2], [1.71368748E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368766E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71368748E12, "maxY": 0.38333333333333336, "series": [{"data": [[1.71368754E12, 0.23333333333333334], [1.7136876E12, 0.38333333333333336], [1.71368766E12, 0.2], [1.71368748E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368766E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71368748E12, "maxY": 0.38333333333333336, "series": [{"data": [[1.71368754E12, 0.23333333333333334], [1.7136876E12, 0.38333333333333336], [1.71368766E12, 0.2], [1.71368748E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368766E12, "title": "Total Transactions Per Second"}},
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

