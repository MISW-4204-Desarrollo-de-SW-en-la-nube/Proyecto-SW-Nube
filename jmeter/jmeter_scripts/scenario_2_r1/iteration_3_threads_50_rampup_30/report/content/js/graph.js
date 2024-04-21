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
        data: {"result": {"minY": 6867.0, "minX": 0.0, "maxY": 144654.0, "series": [{"data": [[0.0, 6867.0], [0.1, 6867.0], [0.2, 6867.0], [0.3, 6867.0], [0.4, 6867.0], [0.5, 6867.0], [0.6, 6867.0], [0.7, 6867.0], [0.8, 6867.0], [0.9, 6867.0], [1.0, 6867.0], [1.1, 6867.0], [1.2, 6867.0], [1.3, 6867.0], [1.4, 6867.0], [1.5, 6867.0], [1.6, 6867.0], [1.7, 6867.0], [1.8, 6867.0], [1.9, 6867.0], [2.0, 13937.0], [2.1, 13937.0], [2.2, 13937.0], [2.3, 13937.0], [2.4, 13937.0], [2.5, 13937.0], [2.6, 13937.0], [2.7, 13937.0], [2.8, 13937.0], [2.9, 13937.0], [3.0, 13937.0], [3.1, 13937.0], [3.2, 13937.0], [3.3, 13937.0], [3.4, 13937.0], [3.5, 13937.0], [3.6, 13937.0], [3.7, 13937.0], [3.8, 13937.0], [3.9, 13937.0], [4.0, 21521.0], [4.1, 21521.0], [4.2, 21521.0], [4.3, 21521.0], [4.4, 21521.0], [4.5, 21521.0], [4.6, 21521.0], [4.7, 21521.0], [4.8, 21521.0], [4.9, 21521.0], [5.0, 21521.0], [5.1, 21521.0], [5.2, 21521.0], [5.3, 21521.0], [5.4, 21521.0], [5.5, 21521.0], [5.6, 21521.0], [5.7, 21521.0], [5.8, 21521.0], [5.9, 21521.0], [6.0, 34522.0], [6.1, 34522.0], [6.2, 34522.0], [6.3, 34522.0], [6.4, 34522.0], [6.5, 34522.0], [6.6, 34522.0], [6.7, 34522.0], [6.8, 34522.0], [6.9, 34522.0], [7.0, 34522.0], [7.1, 34522.0], [7.2, 34522.0], [7.3, 34522.0], [7.4, 34522.0], [7.5, 34522.0], [7.6, 34522.0], [7.7, 34522.0], [7.8, 34522.0], [7.9, 34522.0], [8.0, 40635.0], [8.1, 40635.0], [8.2, 40635.0], [8.3, 40635.0], [8.4, 40635.0], [8.5, 40635.0], [8.6, 40635.0], [8.7, 40635.0], [8.8, 40635.0], [8.9, 40635.0], [9.0, 40635.0], [9.1, 40635.0], [9.2, 40635.0], [9.3, 40635.0], [9.4, 40635.0], [9.5, 40635.0], [9.6, 40635.0], [9.7, 40635.0], [9.8, 40635.0], [9.9, 40635.0], [10.0, 41545.0], [10.1, 41545.0], [10.2, 41545.0], [10.3, 41545.0], [10.4, 41545.0], [10.5, 41545.0], [10.6, 41545.0], [10.7, 41545.0], [10.8, 41545.0], [10.9, 41545.0], [11.0, 41545.0], [11.1, 41545.0], [11.2, 41545.0], [11.3, 41545.0], [11.4, 41545.0], [11.5, 41545.0], [11.6, 41545.0], [11.7, 41545.0], [11.8, 41545.0], [11.9, 41545.0], [12.0, 42723.0], [12.1, 42723.0], [12.2, 42723.0], [12.3, 42723.0], [12.4, 42723.0], [12.5, 42723.0], [12.6, 42723.0], [12.7, 42723.0], [12.8, 42723.0], [12.9, 42723.0], [13.0, 42723.0], [13.1, 42723.0], [13.2, 42723.0], [13.3, 42723.0], [13.4, 42723.0], [13.5, 42723.0], [13.6, 42723.0], [13.7, 42723.0], [13.8, 42723.0], [13.9, 42723.0], [14.0, 44109.0], [14.1, 44109.0], [14.2, 44109.0], [14.3, 44109.0], [14.4, 44109.0], [14.5, 44109.0], [14.6, 44109.0], [14.7, 44109.0], [14.8, 44109.0], [14.9, 44109.0], [15.0, 44109.0], [15.1, 44109.0], [15.2, 44109.0], [15.3, 44109.0], [15.4, 44109.0], [15.5, 44109.0], [15.6, 44109.0], [15.7, 44109.0], [15.8, 44109.0], [15.9, 44109.0], [16.0, 48608.0], [16.1, 48608.0], [16.2, 48608.0], [16.3, 48608.0], [16.4, 48608.0], [16.5, 48608.0], [16.6, 48608.0], [16.7, 48608.0], [16.8, 48608.0], [16.9, 48608.0], [17.0, 48608.0], [17.1, 48608.0], [17.2, 48608.0], [17.3, 48608.0], [17.4, 48608.0], [17.5, 48608.0], [17.6, 48608.0], [17.7, 48608.0], [17.8, 48608.0], [17.9, 48608.0], [18.0, 49490.0], [18.1, 49490.0], [18.2, 49490.0], [18.3, 49490.0], [18.4, 49490.0], [18.5, 49490.0], [18.6, 49490.0], [18.7, 49490.0], [18.8, 49490.0], [18.9, 49490.0], [19.0, 49490.0], [19.1, 49490.0], [19.2, 49490.0], [19.3, 49490.0], [19.4, 49490.0], [19.5, 49490.0], [19.6, 49490.0], [19.7, 49490.0], [19.8, 49490.0], [19.9, 49490.0], [20.0, 50722.0], [20.1, 50722.0], [20.2, 50722.0], [20.3, 50722.0], [20.4, 50722.0], [20.5, 50722.0], [20.6, 50722.0], [20.7, 50722.0], [20.8, 50722.0], [20.9, 50722.0], [21.0, 50722.0], [21.1, 50722.0], [21.2, 50722.0], [21.3, 50722.0], [21.4, 50722.0], [21.5, 50722.0], [21.6, 50722.0], [21.7, 50722.0], [21.8, 50722.0], [21.9, 50722.0], [22.0, 52861.0], [22.1, 52861.0], [22.2, 52861.0], [22.3, 52861.0], [22.4, 52861.0], [22.5, 52861.0], [22.6, 52861.0], [22.7, 52861.0], [22.8, 52861.0], [22.9, 52861.0], [23.0, 52861.0], [23.1, 52861.0], [23.2, 52861.0], [23.3, 52861.0], [23.4, 52861.0], [23.5, 52861.0], [23.6, 52861.0], [23.7, 52861.0], [23.8, 52861.0], [23.9, 52861.0], [24.0, 56972.0], [24.1, 56972.0], [24.2, 56972.0], [24.3, 56972.0], [24.4, 56972.0], [24.5, 56972.0], [24.6, 56972.0], [24.7, 56972.0], [24.8, 56972.0], [24.9, 56972.0], [25.0, 56972.0], [25.1, 56972.0], [25.2, 56972.0], [25.3, 56972.0], [25.4, 56972.0], [25.5, 56972.0], [25.6, 56972.0], [25.7, 56972.0], [25.8, 56972.0], [25.9, 56972.0], [26.0, 65587.0], [26.1, 65587.0], [26.2, 65587.0], [26.3, 65587.0], [26.4, 65587.0], [26.5, 65587.0], [26.6, 65587.0], [26.7, 65587.0], [26.8, 65587.0], [26.9, 65587.0], [27.0, 65587.0], [27.1, 65587.0], [27.2, 65587.0], [27.3, 65587.0], [27.4, 65587.0], [27.5, 65587.0], [27.6, 65587.0], [27.7, 65587.0], [27.8, 65587.0], [27.9, 65587.0], [28.0, 67576.0], [28.1, 67576.0], [28.2, 67576.0], [28.3, 67576.0], [28.4, 67576.0], [28.5, 67576.0], [28.6, 67576.0], [28.7, 67576.0], [28.8, 67576.0], [28.9, 67576.0], [29.0, 67576.0], [29.1, 67576.0], [29.2, 67576.0], [29.3, 67576.0], [29.4, 67576.0], [29.5, 67576.0], [29.6, 67576.0], [29.7, 67576.0], [29.8, 67576.0], [29.9, 67576.0], [30.0, 69701.0], [30.1, 69701.0], [30.2, 69701.0], [30.3, 69701.0], [30.4, 69701.0], [30.5, 69701.0], [30.6, 69701.0], [30.7, 69701.0], [30.8, 69701.0], [30.9, 69701.0], [31.0, 69701.0], [31.1, 69701.0], [31.2, 69701.0], [31.3, 69701.0], [31.4, 69701.0], [31.5, 69701.0], [31.6, 69701.0], [31.7, 69701.0], [31.8, 69701.0], [31.9, 69701.0], [32.0, 71123.0], [32.1, 71123.0], [32.2, 71123.0], [32.3, 71123.0], [32.4, 71123.0], [32.5, 71123.0], [32.6, 71123.0], [32.7, 71123.0], [32.8, 71123.0], [32.9, 71123.0], [33.0, 71123.0], [33.1, 71123.0], [33.2, 71123.0], [33.3, 71123.0], [33.4, 71123.0], [33.5, 71123.0], [33.6, 71123.0], [33.7, 71123.0], [33.8, 71123.0], [33.9, 71123.0], [34.0, 77481.0], [34.1, 77481.0], [34.2, 77481.0], [34.3, 77481.0], [34.4, 77481.0], [34.5, 77481.0], [34.6, 77481.0], [34.7, 77481.0], [34.8, 77481.0], [34.9, 77481.0], [35.0, 77481.0], [35.1, 77481.0], [35.2, 77481.0], [35.3, 77481.0], [35.4, 77481.0], [35.5, 77481.0], [35.6, 77481.0], [35.7, 77481.0], [35.8, 77481.0], [35.9, 77481.0], [36.0, 77631.0], [36.1, 77631.0], [36.2, 77631.0], [36.3, 77631.0], [36.4, 77631.0], [36.5, 77631.0], [36.6, 77631.0], [36.7, 77631.0], [36.8, 77631.0], [36.9, 77631.0], [37.0, 77631.0], [37.1, 77631.0], [37.2, 77631.0], [37.3, 77631.0], [37.4, 77631.0], [37.5, 77631.0], [37.6, 77631.0], [37.7, 77631.0], [37.8, 77631.0], [37.9, 77631.0], [38.0, 78356.0], [38.1, 78356.0], [38.2, 78356.0], [38.3, 78356.0], [38.4, 78356.0], [38.5, 78356.0], [38.6, 78356.0], [38.7, 78356.0], [38.8, 78356.0], [38.9, 78356.0], [39.0, 78356.0], [39.1, 78356.0], [39.2, 78356.0], [39.3, 78356.0], [39.4, 78356.0], [39.5, 78356.0], [39.6, 78356.0], [39.7, 78356.0], [39.8, 78356.0], [39.9, 78356.0], [40.0, 78868.0], [40.1, 78868.0], [40.2, 78868.0], [40.3, 78868.0], [40.4, 78868.0], [40.5, 78868.0], [40.6, 78868.0], [40.7, 78868.0], [40.8, 78868.0], [40.9, 78868.0], [41.0, 78868.0], [41.1, 78868.0], [41.2, 78868.0], [41.3, 78868.0], [41.4, 78868.0], [41.5, 78868.0], [41.6, 78868.0], [41.7, 78868.0], [41.8, 78868.0], [41.9, 78868.0], [42.0, 86094.0], [42.1, 86094.0], [42.2, 86094.0], [42.3, 86094.0], [42.4, 86094.0], [42.5, 86094.0], [42.6, 86094.0], [42.7, 86094.0], [42.8, 86094.0], [42.9, 86094.0], [43.0, 86094.0], [43.1, 86094.0], [43.2, 86094.0], [43.3, 86094.0], [43.4, 86094.0], [43.5, 86094.0], [43.6, 86094.0], [43.7, 86094.0], [43.8, 86094.0], [43.9, 86094.0], [44.0, 87163.0], [44.1, 87163.0], [44.2, 87163.0], [44.3, 87163.0], [44.4, 87163.0], [44.5, 87163.0], [44.6, 87163.0], [44.7, 87163.0], [44.8, 87163.0], [44.9, 87163.0], [45.0, 87163.0], [45.1, 87163.0], [45.2, 87163.0], [45.3, 87163.0], [45.4, 87163.0], [45.5, 87163.0], [45.6, 87163.0], [45.7, 87163.0], [45.8, 87163.0], [45.9, 87163.0], [46.0, 87656.0], [46.1, 87656.0], [46.2, 87656.0], [46.3, 87656.0], [46.4, 87656.0], [46.5, 87656.0], [46.6, 87656.0], [46.7, 87656.0], [46.8, 87656.0], [46.9, 87656.0], [47.0, 87656.0], [47.1, 87656.0], [47.2, 87656.0], [47.3, 87656.0], [47.4, 87656.0], [47.5, 87656.0], [47.6, 87656.0], [47.7, 87656.0], [47.8, 87656.0], [47.9, 87656.0], [48.0, 88163.0], [48.1, 88163.0], [48.2, 88163.0], [48.3, 88163.0], [48.4, 88163.0], [48.5, 88163.0], [48.6, 88163.0], [48.7, 88163.0], [48.8, 88163.0], [48.9, 88163.0], [49.0, 88163.0], [49.1, 88163.0], [49.2, 88163.0], [49.3, 88163.0], [49.4, 88163.0], [49.5, 88163.0], [49.6, 88163.0], [49.7, 88163.0], [49.8, 88163.0], [49.9, 88163.0], [50.0, 91481.0], [50.1, 91481.0], [50.2, 91481.0], [50.3, 91481.0], [50.4, 91481.0], [50.5, 91481.0], [50.6, 91481.0], [50.7, 91481.0], [50.8, 91481.0], [50.9, 91481.0], [51.0, 91481.0], [51.1, 91481.0], [51.2, 91481.0], [51.3, 91481.0], [51.4, 91481.0], [51.5, 91481.0], [51.6, 91481.0], [51.7, 91481.0], [51.8, 91481.0], [51.9, 91481.0], [52.0, 94023.0], [52.1, 94023.0], [52.2, 94023.0], [52.3, 94023.0], [52.4, 94023.0], [52.5, 94023.0], [52.6, 94023.0], [52.7, 94023.0], [52.8, 94023.0], [52.9, 94023.0], [53.0, 94023.0], [53.1, 94023.0], [53.2, 94023.0], [53.3, 94023.0], [53.4, 94023.0], [53.5, 94023.0], [53.6, 94023.0], [53.7, 94023.0], [53.8, 94023.0], [53.9, 94023.0], [54.0, 94537.0], [54.1, 94537.0], [54.2, 94537.0], [54.3, 94537.0], [54.4, 94537.0], [54.5, 94537.0], [54.6, 94537.0], [54.7, 94537.0], [54.8, 94537.0], [54.9, 94537.0], [55.0, 94537.0], [55.1, 94537.0], [55.2, 94537.0], [55.3, 94537.0], [55.4, 94537.0], [55.5, 94537.0], [55.6, 94537.0], [55.7, 94537.0], [55.8, 94537.0], [55.9, 94537.0], [56.0, 99189.0], [56.1, 99189.0], [56.2, 99189.0], [56.3, 99189.0], [56.4, 99189.0], [56.5, 99189.0], [56.6, 99189.0], [56.7, 99189.0], [56.8, 99189.0], [56.9, 99189.0], [57.0, 99189.0], [57.1, 99189.0], [57.2, 99189.0], [57.3, 99189.0], [57.4, 99189.0], [57.5, 99189.0], [57.6, 99189.0], [57.7, 99189.0], [57.8, 99189.0], [57.9, 99189.0], [58.0, 111918.0], [58.1, 111918.0], [58.2, 111918.0], [58.3, 111918.0], [58.4, 111918.0], [58.5, 111918.0], [58.6, 111918.0], [58.7, 111918.0], [58.8, 111918.0], [58.9, 111918.0], [59.0, 111918.0], [59.1, 111918.0], [59.2, 111918.0], [59.3, 111918.0], [59.4, 111918.0], [59.5, 111918.0], [59.6, 111918.0], [59.7, 111918.0], [59.8, 111918.0], [59.9, 111918.0], [60.0, 112202.0], [60.1, 112202.0], [60.2, 112202.0], [60.3, 112202.0], [60.4, 112202.0], [60.5, 112202.0], [60.6, 112202.0], [60.7, 112202.0], [60.8, 112202.0], [60.9, 112202.0], [61.0, 112202.0], [61.1, 112202.0], [61.2, 112202.0], [61.3, 112202.0], [61.4, 112202.0], [61.5, 112202.0], [61.6, 112202.0], [61.7, 112202.0], [61.8, 112202.0], [61.9, 112202.0], [62.0, 119034.0], [62.1, 119034.0], [62.2, 119034.0], [62.3, 119034.0], [62.4, 119034.0], [62.5, 119034.0], [62.6, 119034.0], [62.7, 119034.0], [62.8, 119034.0], [62.9, 119034.0], [63.0, 119034.0], [63.1, 119034.0], [63.2, 119034.0], [63.3, 119034.0], [63.4, 119034.0], [63.5, 119034.0], [63.6, 119034.0], [63.7, 119034.0], [63.8, 119034.0], [63.9, 119034.0], [64.0, 121745.0], [64.1, 121745.0], [64.2, 121745.0], [64.3, 121745.0], [64.4, 121745.0], [64.5, 121745.0], [64.6, 121745.0], [64.7, 121745.0], [64.8, 121745.0], [64.9, 121745.0], [65.0, 121745.0], [65.1, 121745.0], [65.2, 121745.0], [65.3, 121745.0], [65.4, 121745.0], [65.5, 121745.0], [65.6, 121745.0], [65.7, 121745.0], [65.8, 121745.0], [65.9, 121745.0], [66.0, 126946.0], [66.1, 126946.0], [66.2, 126946.0], [66.3, 126946.0], [66.4, 126946.0], [66.5, 126946.0], [66.6, 126946.0], [66.7, 126946.0], [66.8, 126946.0], [66.9, 126946.0], [67.0, 126946.0], [67.1, 126946.0], [67.2, 126946.0], [67.3, 126946.0], [67.4, 126946.0], [67.5, 126946.0], [67.6, 126946.0], [67.7, 126946.0], [67.8, 126946.0], [67.9, 126946.0], [68.0, 127032.0], [68.1, 127032.0], [68.2, 127032.0], [68.3, 127032.0], [68.4, 127032.0], [68.5, 127032.0], [68.6, 127032.0], [68.7, 127032.0], [68.8, 127032.0], [68.9, 127032.0], [69.0, 127032.0], [69.1, 127032.0], [69.2, 127032.0], [69.3, 127032.0], [69.4, 127032.0], [69.5, 127032.0], [69.6, 127032.0], [69.7, 127032.0], [69.8, 127032.0], [69.9, 127032.0], [70.0, 130074.0], [70.1, 130074.0], [70.2, 130074.0], [70.3, 130074.0], [70.4, 130074.0], [70.5, 130074.0], [70.6, 130074.0], [70.7, 130074.0], [70.8, 130074.0], [70.9, 130074.0], [71.0, 130074.0], [71.1, 130074.0], [71.2, 130074.0], [71.3, 130074.0], [71.4, 130074.0], [71.5, 130074.0], [71.6, 130074.0], [71.7, 130074.0], [71.8, 130074.0], [71.9, 130074.0], [72.0, 130913.0], [72.1, 130913.0], [72.2, 130913.0], [72.3, 130913.0], [72.4, 130913.0], [72.5, 130913.0], [72.6, 130913.0], [72.7, 130913.0], [72.8, 130913.0], [72.9, 130913.0], [73.0, 130913.0], [73.1, 130913.0], [73.2, 130913.0], [73.3, 130913.0], [73.4, 130913.0], [73.5, 130913.0], [73.6, 130913.0], [73.7, 130913.0], [73.8, 130913.0], [73.9, 130913.0], [74.0, 131492.0], [74.1, 131492.0], [74.2, 131492.0], [74.3, 131492.0], [74.4, 131492.0], [74.5, 131492.0], [74.6, 131492.0], [74.7, 131492.0], [74.8, 131492.0], [74.9, 131492.0], [75.0, 131492.0], [75.1, 131492.0], [75.2, 131492.0], [75.3, 131492.0], [75.4, 131492.0], [75.5, 131492.0], [75.6, 131492.0], [75.7, 131492.0], [75.8, 131492.0], [75.9, 131492.0], [76.0, 131583.0], [76.1, 131583.0], [76.2, 131583.0], [76.3, 131583.0], [76.4, 131583.0], [76.5, 131583.0], [76.6, 131583.0], [76.7, 131583.0], [76.8, 131583.0], [76.9, 131583.0], [77.0, 131583.0], [77.1, 131583.0], [77.2, 131583.0], [77.3, 131583.0], [77.4, 131583.0], [77.5, 131583.0], [77.6, 131583.0], [77.7, 131583.0], [77.8, 131583.0], [77.9, 131583.0], [78.0, 133683.0], [78.1, 133683.0], [78.2, 133683.0], [78.3, 133683.0], [78.4, 133683.0], [78.5, 133683.0], [78.6, 133683.0], [78.7, 133683.0], [78.8, 133683.0], [78.9, 133683.0], [79.0, 133683.0], [79.1, 133683.0], [79.2, 133683.0], [79.3, 133683.0], [79.4, 133683.0], [79.5, 133683.0], [79.6, 133683.0], [79.7, 133683.0], [79.8, 133683.0], [79.9, 133683.0], [80.0, 134603.0], [80.1, 134603.0], [80.2, 134603.0], [80.3, 134603.0], [80.4, 134603.0], [80.5, 134603.0], [80.6, 134603.0], [80.7, 134603.0], [80.8, 134603.0], [80.9, 134603.0], [81.0, 134603.0], [81.1, 134603.0], [81.2, 134603.0], [81.3, 134603.0], [81.4, 134603.0], [81.5, 134603.0], [81.6, 134603.0], [81.7, 134603.0], [81.8, 134603.0], [81.9, 134603.0], [82.0, 136573.0], [82.1, 136573.0], [82.2, 136573.0], [82.3, 136573.0], [82.4, 136573.0], [82.5, 136573.0], [82.6, 136573.0], [82.7, 136573.0], [82.8, 136573.0], [82.9, 136573.0], [83.0, 136573.0], [83.1, 136573.0], [83.2, 136573.0], [83.3, 136573.0], [83.4, 136573.0], [83.5, 136573.0], [83.6, 136573.0], [83.7, 136573.0], [83.8, 136573.0], [83.9, 136573.0], [84.0, 140448.0], [84.1, 140448.0], [84.2, 140448.0], [84.3, 140448.0], [84.4, 140448.0], [84.5, 140448.0], [84.6, 140448.0], [84.7, 140448.0], [84.8, 140448.0], [84.9, 140448.0], [85.0, 140448.0], [85.1, 140448.0], [85.2, 140448.0], [85.3, 140448.0], [85.4, 140448.0], [85.5, 140448.0], [85.6, 140448.0], [85.7, 140448.0], [85.8, 140448.0], [85.9, 140448.0], [86.0, 140590.0], [86.1, 140590.0], [86.2, 140590.0], [86.3, 140590.0], [86.4, 140590.0], [86.5, 140590.0], [86.6, 140590.0], [86.7, 140590.0], [86.8, 140590.0], [86.9, 140590.0], [87.0, 140590.0], [87.1, 140590.0], [87.2, 140590.0], [87.3, 140590.0], [87.4, 140590.0], [87.5, 140590.0], [87.6, 140590.0], [87.7, 140590.0], [87.8, 140590.0], [87.9, 140590.0], [88.0, 141261.0], [88.1, 141261.0], [88.2, 141261.0], [88.3, 141261.0], [88.4, 141261.0], [88.5, 141261.0], [88.6, 141261.0], [88.7, 141261.0], [88.8, 141261.0], [88.9, 141261.0], [89.0, 141261.0], [89.1, 141261.0], [89.2, 141261.0], [89.3, 141261.0], [89.4, 141261.0], [89.5, 141261.0], [89.6, 141261.0], [89.7, 141261.0], [89.8, 141261.0], [89.9, 141261.0], [90.0, 142108.0], [90.1, 142108.0], [90.2, 142108.0], [90.3, 142108.0], [90.4, 142108.0], [90.5, 142108.0], [90.6, 142108.0], [90.7, 142108.0], [90.8, 142108.0], [90.9, 142108.0], [91.0, 142108.0], [91.1, 142108.0], [91.2, 142108.0], [91.3, 142108.0], [91.4, 142108.0], [91.5, 142108.0], [91.6, 142108.0], [91.7, 142108.0], [91.8, 142108.0], [91.9, 142108.0], [92.0, 142331.0], [92.1, 142331.0], [92.2, 142331.0], [92.3, 142331.0], [92.4, 142331.0], [92.5, 142331.0], [92.6, 142331.0], [92.7, 142331.0], [92.8, 142331.0], [92.9, 142331.0], [93.0, 142331.0], [93.1, 142331.0], [93.2, 142331.0], [93.3, 142331.0], [93.4, 142331.0], [93.5, 142331.0], [93.6, 142331.0], [93.7, 142331.0], [93.8, 142331.0], [93.9, 142331.0], [94.0, 142919.0], [94.1, 142919.0], [94.2, 142919.0], [94.3, 142919.0], [94.4, 142919.0], [94.5, 142919.0], [94.6, 142919.0], [94.7, 142919.0], [94.8, 142919.0], [94.9, 142919.0], [95.0, 142919.0], [95.1, 142919.0], [95.2, 142919.0], [95.3, 142919.0], [95.4, 142919.0], [95.5, 142919.0], [95.6, 142919.0], [95.7, 142919.0], [95.8, 142919.0], [95.9, 142919.0], [96.0, 143120.0], [96.1, 143120.0], [96.2, 143120.0], [96.3, 143120.0], [96.4, 143120.0], [96.5, 143120.0], [96.6, 143120.0], [96.7, 143120.0], [96.8, 143120.0], [96.9, 143120.0], [97.0, 143120.0], [97.1, 143120.0], [97.2, 143120.0], [97.3, 143120.0], [97.4, 143120.0], [97.5, 143120.0], [97.6, 143120.0], [97.7, 143120.0], [97.8, 143120.0], [97.9, 143120.0], [98.0, 144654.0], [98.1, 144654.0], [98.2, 144654.0], [98.3, 144654.0], [98.4, 144654.0], [98.5, 144654.0], [98.6, 144654.0], [98.7, 144654.0], [98.8, 144654.0], [98.9, 144654.0], [99.0, 144654.0], [99.1, 144654.0], [99.2, 144654.0], [99.3, 144654.0], [99.4, 144654.0], [99.5, 144654.0], [99.6, 144654.0], [99.7, 144654.0], [99.8, 144654.0], [99.9, 144654.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 6800.0, "maxY": 1.0, "series": [{"data": [[133600.0, 1.0], [140400.0, 1.0], [141200.0, 1.0], [136500.0, 1.0], [142100.0, 1.0], [140500.0, 1.0], [142900.0, 1.0], [67500.0, 1.0], [69700.0, 1.0], [71100.0, 1.0], [78300.0, 1.0], [87100.0, 1.0], [88100.0, 1.0], [94500.0, 1.0], [99100.0, 1.0], [6800.0, 1.0], [111900.0, 1.0], [121700.0, 1.0], [126900.0, 1.0], [130900.0, 1.0], [131400.0, 1.0], [134600.0, 1.0], [144600.0, 1.0], [13900.0, 1.0], [21500.0, 1.0], [34500.0, 1.0], [131500.0, 1.0], [143100.0, 1.0], [142300.0, 1.0], [40600.0, 1.0], [41500.0, 1.0], [42700.0, 1.0], [44100.0, 1.0], [48600.0, 1.0], [49400.0, 1.0], [50700.0, 1.0], [52800.0, 1.0], [56900.0, 1.0], [65500.0, 1.0], [77400.0, 1.0], [77600.0, 1.0], [78800.0, 1.0], [86000.0, 1.0], [87600.0, 1.0], [91400.0, 1.0], [94000.0, 1.0], [112200.0, 1.0], [119000.0, 1.0], [130000.0, 1.0], [127000.0, 1.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 144600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.71368772E12, "maxY": 38.166666666666664, "series": [{"data": [[1.71368784E12, 11.0], [1.71368772E12, 38.166666666666664], [1.71368778E12, 30.0]], "isOverall": false, "label": "Primer Escenario", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368784E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 34522.0, "minX": 1.0, "maxY": 144654.0, "series": [{"data": [[33.0, 78868.0], [32.0, 78356.0], [2.0, 142331.0], [35.0, 69701.0], [34.0, 71123.0], [36.0, 44548.5], [37.0, 65587.0], [39.0, 52861.0], [38.0, 56972.0], [41.0, 49490.0], [40.0, 50722.0], [43.0, 44109.0], [42.0, 48608.0], [45.0, 41545.0], [44.0, 42723.0], [47.0, 34522.0], [46.0, 40635.0], [3.0, 143120.0], [4.0, 141261.0], [5.0, 144654.0], [6.0, 140448.0], [7.0, 140590.0], [8.0, 142108.0], [9.0, 136573.0], [10.0, 130913.0], [11.0, 133683.0], [12.0, 69225.0], [13.0, 134603.0], [14.0, 131492.0], [15.0, 127032.0], [16.0, 130074.0], [1.0, 142919.0], [17.0, 119034.0], [18.0, 126946.0], [19.0, 121745.0], [20.0, 112202.0], [21.0, 111918.0], [22.0, 99189.0], [23.0, 54237.0], [24.0, 94023.0], [25.0, 91481.0], [26.0, 86094.0], [27.0, 87656.0], [28.0, 88163.0], [29.0, 87163.0], [30.0, 77631.0], [31.0, 77481.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}, {"data": [[23.980000000000008, 92087.40000000004]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 47.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 39.6, "minX": 1.71368772E12, "maxY": 1.29014555E7, "series": [{"data": [[1.71368784E12, 69.3], [1.71368772E12, 39.6], [1.71368778E12, 56.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71368784E12, 1.29014555E7], [1.71368772E12, 7372259.6], [1.71368778E12, 1.0444034366666667E7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368784E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 37295.0, "minX": 1.71368772E12, "maxY": 132629.95238095237, "series": [{"data": [[1.71368784E12, 132629.95238095237], [1.71368772E12, 37295.0], [1.71368778E12, 80682.4117647059]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368784E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 37294.5, "minX": 1.71368772E12, "maxY": 132629.90476190476, "series": [{"data": [[1.71368784E12, 132629.90476190476], [1.71368772E12, 37294.5], [1.71368778E12, 80682.4117647059]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368784E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 64.82352941176472, "minX": 1.71368772E12, "maxY": 70.91666666666667, "series": [{"data": [[1.71368784E12, 67.76190476190474], [1.71368772E12, 70.91666666666667], [1.71368778E12, 64.82352941176472]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368784E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6867.0, "minX": 1.71368772E12, "maxY": 144654.0, "series": [{"data": [[1.71368784E12, 144654.0], [1.71368772E12, 52861.0], [1.71368778E12, 99189.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71368784E12, 143079.8], [1.71368772E12, 52219.3], [1.71368778E12, 95467.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71368784E12, 144654.0], [1.71368772E12, 52861.0], [1.71368778E12, 99189.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71368784E12, 144500.6], [1.71368772E12, 52861.0], [1.71368778E12, 99189.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71368784E12, 111918.0], [1.71368772E12, 6867.0], [1.71368778E12, 56972.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71368784E12, 133683.0], [1.71368772E12, 42134.0], [1.71368778E12, 78868.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368784E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 86628.5, "minX": 1.0, "maxY": 133093.0, "series": [{"data": [[1.0, 86628.5], [2.0, 133093.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 86628.5, "minX": 1.0, "maxY": 133093.0, "series": [{"data": [[1.0, 86628.5], [2.0, 133093.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.71368772E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.71368772E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368772E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.71368772E12, "maxY": 0.35, "series": [{"data": [[1.71368784E12, 0.35], [1.71368772E12, 0.2], [1.71368778E12, 0.2833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368784E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.71368772E12, "maxY": 0.35, "series": [{"data": [[1.71368784E12, 0.35], [1.71368772E12, 0.2], [1.71368778E12, 0.2833333333333333]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368784E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.71368772E12, "maxY": 0.35, "series": [{"data": [[1.71368784E12, 0.35], [1.71368772E12, 0.2], [1.71368778E12, 0.2833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368784E12, "title": "Total Transactions Per Second"}},
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

