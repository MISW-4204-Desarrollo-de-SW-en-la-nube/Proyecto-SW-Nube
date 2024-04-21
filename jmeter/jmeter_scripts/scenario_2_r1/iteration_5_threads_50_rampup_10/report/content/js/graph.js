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
        data: {"result": {"minY": 10716.0, "minX": 0.0, "maxY": 198078.0, "series": [{"data": [[0.0, 10716.0], [0.1, 10716.0], [0.2, 10716.0], [0.3, 10716.0], [0.4, 10716.0], [0.5, 10716.0], [0.6, 10716.0], [0.7, 10716.0], [0.8, 10716.0], [0.9, 10716.0], [1.0, 10716.0], [1.1, 10716.0], [1.2, 10716.0], [1.3, 10716.0], [1.4, 10716.0], [1.5, 10716.0], [1.6, 10716.0], [1.7, 10716.0], [1.8, 10716.0], [1.9, 10716.0], [2.0, 12371.0], [2.1, 12371.0], [2.2, 12371.0], [2.3, 12371.0], [2.4, 12371.0], [2.5, 12371.0], [2.6, 12371.0], [2.7, 12371.0], [2.8, 12371.0], [2.9, 12371.0], [3.0, 12371.0], [3.1, 12371.0], [3.2, 12371.0], [3.3, 12371.0], [3.4, 12371.0], [3.5, 12371.0], [3.6, 12371.0], [3.7, 12371.0], [3.8, 12371.0], [3.9, 12371.0], [4.0, 14209.0], [4.1, 14209.0], [4.2, 14209.0], [4.3, 14209.0], [4.4, 14209.0], [4.5, 14209.0], [4.6, 14209.0], [4.7, 14209.0], [4.8, 14209.0], [4.9, 14209.0], [5.0, 14209.0], [5.1, 14209.0], [5.2, 14209.0], [5.3, 14209.0], [5.4, 14209.0], [5.5, 14209.0], [5.6, 14209.0], [5.7, 14209.0], [5.8, 14209.0], [5.9, 14209.0], [6.0, 15857.0], [6.1, 15857.0], [6.2, 15857.0], [6.3, 15857.0], [6.4, 15857.0], [6.5, 15857.0], [6.6, 15857.0], [6.7, 15857.0], [6.8, 15857.0], [6.9, 15857.0], [7.0, 15857.0], [7.1, 15857.0], [7.2, 15857.0], [7.3, 15857.0], [7.4, 15857.0], [7.5, 15857.0], [7.6, 15857.0], [7.7, 15857.0], [7.8, 15857.0], [7.9, 15857.0], [8.0, 16896.0], [8.1, 16896.0], [8.2, 16896.0], [8.3, 16896.0], [8.4, 16896.0], [8.5, 16896.0], [8.6, 16896.0], [8.7, 16896.0], [8.8, 16896.0], [8.9, 16896.0], [9.0, 16896.0], [9.1, 16896.0], [9.2, 16896.0], [9.3, 16896.0], [9.4, 16896.0], [9.5, 16896.0], [9.6, 16896.0], [9.7, 16896.0], [9.8, 16896.0], [9.9, 16896.0], [10.0, 17815.0], [10.1, 17815.0], [10.2, 17815.0], [10.3, 17815.0], [10.4, 17815.0], [10.5, 17815.0], [10.6, 17815.0], [10.7, 17815.0], [10.8, 17815.0], [10.9, 17815.0], [11.0, 17815.0], [11.1, 17815.0], [11.2, 17815.0], [11.3, 17815.0], [11.4, 17815.0], [11.5, 17815.0], [11.6, 17815.0], [11.7, 17815.0], [11.8, 17815.0], [11.9, 17815.0], [12.0, 23530.0], [12.1, 23530.0], [12.2, 23530.0], [12.3, 23530.0], [12.4, 23530.0], [12.5, 23530.0], [12.6, 23530.0], [12.7, 23530.0], [12.8, 23530.0], [12.9, 23530.0], [13.0, 23530.0], [13.1, 23530.0], [13.2, 23530.0], [13.3, 23530.0], [13.4, 23530.0], [13.5, 23530.0], [13.6, 23530.0], [13.7, 23530.0], [13.8, 23530.0], [13.9, 23530.0], [14.0, 24601.0], [14.1, 24601.0], [14.2, 24601.0], [14.3, 24601.0], [14.4, 24601.0], [14.5, 24601.0], [14.6, 24601.0], [14.7, 24601.0], [14.8, 24601.0], [14.9, 24601.0], [15.0, 24601.0], [15.1, 24601.0], [15.2, 24601.0], [15.3, 24601.0], [15.4, 24601.0], [15.5, 24601.0], [15.6, 24601.0], [15.7, 24601.0], [15.8, 24601.0], [15.9, 24601.0], [16.0, 28636.0], [16.1, 28636.0], [16.2, 28636.0], [16.3, 28636.0], [16.4, 28636.0], [16.5, 28636.0], [16.6, 28636.0], [16.7, 28636.0], [16.8, 28636.0], [16.9, 28636.0], [17.0, 28636.0], [17.1, 28636.0], [17.2, 28636.0], [17.3, 28636.0], [17.4, 28636.0], [17.5, 28636.0], [17.6, 28636.0], [17.7, 28636.0], [17.8, 28636.0], [17.9, 28636.0], [18.0, 33350.0], [18.1, 33350.0], [18.2, 33350.0], [18.3, 33350.0], [18.4, 33350.0], [18.5, 33350.0], [18.6, 33350.0], [18.7, 33350.0], [18.8, 33350.0], [18.9, 33350.0], [19.0, 33350.0], [19.1, 33350.0], [19.2, 33350.0], [19.3, 33350.0], [19.4, 33350.0], [19.5, 33350.0], [19.6, 33350.0], [19.7, 33350.0], [19.8, 33350.0], [19.9, 33350.0], [20.0, 34933.0], [20.1, 34933.0], [20.2, 34933.0], [20.3, 34933.0], [20.4, 34933.0], [20.5, 34933.0], [20.6, 34933.0], [20.7, 34933.0], [20.8, 34933.0], [20.9, 34933.0], [21.0, 34933.0], [21.1, 34933.0], [21.2, 34933.0], [21.3, 34933.0], [21.4, 34933.0], [21.5, 34933.0], [21.6, 34933.0], [21.7, 34933.0], [21.8, 34933.0], [21.9, 34933.0], [22.0, 38048.0], [22.1, 38048.0], [22.2, 38048.0], [22.3, 38048.0], [22.4, 38048.0], [22.5, 38048.0], [22.6, 38048.0], [22.7, 38048.0], [22.8, 38048.0], [22.9, 38048.0], [23.0, 38048.0], [23.1, 38048.0], [23.2, 38048.0], [23.3, 38048.0], [23.4, 38048.0], [23.5, 38048.0], [23.6, 38048.0], [23.7, 38048.0], [23.8, 38048.0], [23.9, 38048.0], [24.0, 41942.0], [24.1, 41942.0], [24.2, 41942.0], [24.3, 41942.0], [24.4, 41942.0], [24.5, 41942.0], [24.6, 41942.0], [24.7, 41942.0], [24.8, 41942.0], [24.9, 41942.0], [25.0, 41942.0], [25.1, 41942.0], [25.2, 41942.0], [25.3, 41942.0], [25.4, 41942.0], [25.5, 41942.0], [25.6, 41942.0], [25.7, 41942.0], [25.8, 41942.0], [25.9, 41942.0], [26.0, 43680.0], [26.1, 43680.0], [26.2, 43680.0], [26.3, 43680.0], [26.4, 43680.0], [26.5, 43680.0], [26.6, 43680.0], [26.7, 43680.0], [26.8, 43680.0], [26.9, 43680.0], [27.0, 43680.0], [27.1, 43680.0], [27.2, 43680.0], [27.3, 43680.0], [27.4, 43680.0], [27.5, 43680.0], [27.6, 43680.0], [27.7, 43680.0], [27.8, 43680.0], [27.9, 43680.0], [28.0, 48928.0], [28.1, 48928.0], [28.2, 48928.0], [28.3, 48928.0], [28.4, 48928.0], [28.5, 48928.0], [28.6, 48928.0], [28.7, 48928.0], [28.8, 48928.0], [28.9, 48928.0], [29.0, 48928.0], [29.1, 48928.0], [29.2, 48928.0], [29.3, 48928.0], [29.4, 48928.0], [29.5, 48928.0], [29.6, 48928.0], [29.7, 48928.0], [29.8, 48928.0], [29.9, 48928.0], [30.0, 49272.0], [30.1, 49272.0], [30.2, 49272.0], [30.3, 49272.0], [30.4, 49272.0], [30.5, 49272.0], [30.6, 49272.0], [30.7, 49272.0], [30.8, 49272.0], [30.9, 49272.0], [31.0, 49272.0], [31.1, 49272.0], [31.2, 49272.0], [31.3, 49272.0], [31.4, 49272.0], [31.5, 49272.0], [31.6, 49272.0], [31.7, 49272.0], [31.8, 49272.0], [31.9, 49272.0], [32.0, 50968.0], [32.1, 50968.0], [32.2, 50968.0], [32.3, 50968.0], [32.4, 50968.0], [32.5, 50968.0], [32.6, 50968.0], [32.7, 50968.0], [32.8, 50968.0], [32.9, 50968.0], [33.0, 50968.0], [33.1, 50968.0], [33.2, 50968.0], [33.3, 50968.0], [33.4, 50968.0], [33.5, 50968.0], [33.6, 50968.0], [33.7, 50968.0], [33.8, 50968.0], [33.9, 50968.0], [34.0, 59154.0], [34.1, 59154.0], [34.2, 59154.0], [34.3, 59154.0], [34.4, 59154.0], [34.5, 59154.0], [34.6, 59154.0], [34.7, 59154.0], [34.8, 59154.0], [34.9, 59154.0], [35.0, 59154.0], [35.1, 59154.0], [35.2, 59154.0], [35.3, 59154.0], [35.4, 59154.0], [35.5, 59154.0], [35.6, 59154.0], [35.7, 59154.0], [35.8, 59154.0], [35.9, 59154.0], [36.0, 63866.0], [36.1, 63866.0], [36.2, 63866.0], [36.3, 63866.0], [36.4, 63866.0], [36.5, 63866.0], [36.6, 63866.0], [36.7, 63866.0], [36.8, 63866.0], [36.9, 63866.0], [37.0, 63866.0], [37.1, 63866.0], [37.2, 63866.0], [37.3, 63866.0], [37.4, 63866.0], [37.5, 63866.0], [37.6, 63866.0], [37.7, 63866.0], [37.8, 63866.0], [37.9, 63866.0], [38.0, 70042.0], [38.1, 70042.0], [38.2, 70042.0], [38.3, 70042.0], [38.4, 70042.0], [38.5, 70042.0], [38.6, 70042.0], [38.7, 70042.0], [38.8, 70042.0], [38.9, 70042.0], [39.0, 70042.0], [39.1, 70042.0], [39.2, 70042.0], [39.3, 70042.0], [39.4, 70042.0], [39.5, 70042.0], [39.6, 70042.0], [39.7, 70042.0], [39.8, 70042.0], [39.9, 70042.0], [40.0, 72920.0], [40.1, 72920.0], [40.2, 72920.0], [40.3, 72920.0], [40.4, 72920.0], [40.5, 72920.0], [40.6, 72920.0], [40.7, 72920.0], [40.8, 72920.0], [40.9, 72920.0], [41.0, 72920.0], [41.1, 72920.0], [41.2, 72920.0], [41.3, 72920.0], [41.4, 72920.0], [41.5, 72920.0], [41.6, 72920.0], [41.7, 72920.0], [41.8, 72920.0], [41.9, 72920.0], [42.0, 85150.0], [42.1, 85150.0], [42.2, 85150.0], [42.3, 85150.0], [42.4, 85150.0], [42.5, 85150.0], [42.6, 85150.0], [42.7, 85150.0], [42.8, 85150.0], [42.9, 85150.0], [43.0, 85150.0], [43.1, 85150.0], [43.2, 85150.0], [43.3, 85150.0], [43.4, 85150.0], [43.5, 85150.0], [43.6, 85150.0], [43.7, 85150.0], [43.8, 85150.0], [43.9, 85150.0], [44.0, 108882.0], [44.1, 108882.0], [44.2, 108882.0], [44.3, 108882.0], [44.4, 108882.0], [44.5, 108882.0], [44.6, 108882.0], [44.7, 108882.0], [44.8, 108882.0], [44.9, 108882.0], [45.0, 108882.0], [45.1, 108882.0], [45.2, 108882.0], [45.3, 108882.0], [45.4, 108882.0], [45.5, 108882.0], [45.6, 108882.0], [45.7, 108882.0], [45.8, 108882.0], [45.9, 108882.0], [46.0, 126806.0], [46.1, 126806.0], [46.2, 126806.0], [46.3, 126806.0], [46.4, 126806.0], [46.5, 126806.0], [46.6, 126806.0], [46.7, 126806.0], [46.8, 126806.0], [46.9, 126806.0], [47.0, 126806.0], [47.1, 126806.0], [47.2, 126806.0], [47.3, 126806.0], [47.4, 126806.0], [47.5, 126806.0], [47.6, 126806.0], [47.7, 126806.0], [47.8, 126806.0], [47.9, 126806.0], [48.0, 133675.0], [48.1, 133675.0], [48.2, 133675.0], [48.3, 133675.0], [48.4, 133675.0], [48.5, 133675.0], [48.6, 133675.0], [48.7, 133675.0], [48.8, 133675.0], [48.9, 133675.0], [49.0, 133675.0], [49.1, 133675.0], [49.2, 133675.0], [49.3, 133675.0], [49.4, 133675.0], [49.5, 133675.0], [49.6, 133675.0], [49.7, 133675.0], [49.8, 133675.0], [49.9, 133675.0], [50.0, 135395.0], [50.1, 135395.0], [50.2, 135395.0], [50.3, 135395.0], [50.4, 135395.0], [50.5, 135395.0], [50.6, 135395.0], [50.7, 135395.0], [50.8, 135395.0], [50.9, 135395.0], [51.0, 135395.0], [51.1, 135395.0], [51.2, 135395.0], [51.3, 135395.0], [51.4, 135395.0], [51.5, 135395.0], [51.6, 135395.0], [51.7, 135395.0], [51.8, 135395.0], [51.9, 135395.0], [52.0, 140744.0], [52.1, 140744.0], [52.2, 140744.0], [52.3, 140744.0], [52.4, 140744.0], [52.5, 140744.0], [52.6, 140744.0], [52.7, 140744.0], [52.8, 140744.0], [52.9, 140744.0], [53.0, 140744.0], [53.1, 140744.0], [53.2, 140744.0], [53.3, 140744.0], [53.4, 140744.0], [53.5, 140744.0], [53.6, 140744.0], [53.7, 140744.0], [53.8, 140744.0], [53.9, 140744.0], [54.0, 150261.0], [54.1, 150261.0], [54.2, 150261.0], [54.3, 150261.0], [54.4, 150261.0], [54.5, 150261.0], [54.6, 150261.0], [54.7, 150261.0], [54.8, 150261.0], [54.9, 150261.0], [55.0, 150261.0], [55.1, 150261.0], [55.2, 150261.0], [55.3, 150261.0], [55.4, 150261.0], [55.5, 150261.0], [55.6, 150261.0], [55.7, 150261.0], [55.8, 150261.0], [55.9, 150261.0], [56.0, 158110.0], [56.1, 158110.0], [56.2, 158110.0], [56.3, 158110.0], [56.4, 158110.0], [56.5, 158110.0], [56.6, 158110.0], [56.7, 158110.0], [56.8, 158110.0], [56.9, 158110.0], [57.0, 158110.0], [57.1, 158110.0], [57.2, 158110.0], [57.3, 158110.0], [57.4, 158110.0], [57.5, 158110.0], [57.6, 158110.0], [57.7, 158110.0], [57.8, 158110.0], [57.9, 158110.0], [58.0, 160017.0], [58.1, 160017.0], [58.2, 160017.0], [58.3, 160017.0], [58.4, 160017.0], [58.5, 160017.0], [58.6, 160017.0], [58.7, 160017.0], [58.8, 160017.0], [58.9, 160017.0], [59.0, 160017.0], [59.1, 160017.0], [59.2, 160017.0], [59.3, 160017.0], [59.4, 160017.0], [59.5, 160017.0], [59.6, 160017.0], [59.7, 160017.0], [59.8, 160017.0], [59.9, 160017.0], [60.0, 169654.0], [60.1, 169654.0], [60.2, 169654.0], [60.3, 169654.0], [60.4, 169654.0], [60.5, 169654.0], [60.6, 169654.0], [60.7, 169654.0], [60.8, 169654.0], [60.9, 169654.0], [61.0, 169654.0], [61.1, 169654.0], [61.2, 169654.0], [61.3, 169654.0], [61.4, 169654.0], [61.5, 169654.0], [61.6, 169654.0], [61.7, 169654.0], [61.8, 169654.0], [61.9, 169654.0], [62.0, 173872.0], [62.1, 173872.0], [62.2, 173872.0], [62.3, 173872.0], [62.4, 173872.0], [62.5, 173872.0], [62.6, 173872.0], [62.7, 173872.0], [62.8, 173872.0], [62.9, 173872.0], [63.0, 173872.0], [63.1, 173872.0], [63.2, 173872.0], [63.3, 173872.0], [63.4, 173872.0], [63.5, 173872.0], [63.6, 173872.0], [63.7, 173872.0], [63.8, 173872.0], [63.9, 173872.0], [64.0, 174871.0], [64.1, 174871.0], [64.2, 174871.0], [64.3, 174871.0], [64.4, 174871.0], [64.5, 174871.0], [64.6, 174871.0], [64.7, 174871.0], [64.8, 174871.0], [64.9, 174871.0], [65.0, 174871.0], [65.1, 174871.0], [65.2, 174871.0], [65.3, 174871.0], [65.4, 174871.0], [65.5, 174871.0], [65.6, 174871.0], [65.7, 174871.0], [65.8, 174871.0], [65.9, 174871.0], [66.0, 175234.0], [66.1, 175234.0], [66.2, 175234.0], [66.3, 175234.0], [66.4, 175234.0], [66.5, 175234.0], [66.6, 175234.0], [66.7, 175234.0], [66.8, 175234.0], [66.9, 175234.0], [67.0, 175234.0], [67.1, 175234.0], [67.2, 175234.0], [67.3, 175234.0], [67.4, 175234.0], [67.5, 175234.0], [67.6, 175234.0], [67.7, 175234.0], [67.8, 175234.0], [67.9, 175234.0], [68.0, 178146.0], [68.1, 178146.0], [68.2, 178146.0], [68.3, 178146.0], [68.4, 178146.0], [68.5, 178146.0], [68.6, 178146.0], [68.7, 178146.0], [68.8, 178146.0], [68.9, 178146.0], [69.0, 178146.0], [69.1, 178146.0], [69.2, 178146.0], [69.3, 178146.0], [69.4, 178146.0], [69.5, 178146.0], [69.6, 178146.0], [69.7, 178146.0], [69.8, 178146.0], [69.9, 178146.0], [70.0, 182198.0], [70.1, 182198.0], [70.2, 182198.0], [70.3, 182198.0], [70.4, 182198.0], [70.5, 182198.0], [70.6, 182198.0], [70.7, 182198.0], [70.8, 182198.0], [70.9, 182198.0], [71.0, 182198.0], [71.1, 182198.0], [71.2, 182198.0], [71.3, 182198.0], [71.4, 182198.0], [71.5, 182198.0], [71.6, 182198.0], [71.7, 182198.0], [71.8, 182198.0], [71.9, 182198.0], [72.0, 183060.0], [72.1, 183060.0], [72.2, 183060.0], [72.3, 183060.0], [72.4, 183060.0], [72.5, 183060.0], [72.6, 183060.0], [72.7, 183060.0], [72.8, 183060.0], [72.9, 183060.0], [73.0, 183060.0], [73.1, 183060.0], [73.2, 183060.0], [73.3, 183060.0], [73.4, 183060.0], [73.5, 183060.0], [73.6, 183060.0], [73.7, 183060.0], [73.8, 183060.0], [73.9, 183060.0], [74.0, 184319.0], [74.1, 184319.0], [74.2, 184319.0], [74.3, 184319.0], [74.4, 184319.0], [74.5, 184319.0], [74.6, 184319.0], [74.7, 184319.0], [74.8, 184319.0], [74.9, 184319.0], [75.0, 184319.0], [75.1, 184319.0], [75.2, 184319.0], [75.3, 184319.0], [75.4, 184319.0], [75.5, 184319.0], [75.6, 184319.0], [75.7, 184319.0], [75.8, 184319.0], [75.9, 184319.0], [76.0, 185242.0], [76.1, 185242.0], [76.2, 185242.0], [76.3, 185242.0], [76.4, 185242.0], [76.5, 185242.0], [76.6, 185242.0], [76.7, 185242.0], [76.8, 185242.0], [76.9, 185242.0], [77.0, 185242.0], [77.1, 185242.0], [77.2, 185242.0], [77.3, 185242.0], [77.4, 185242.0], [77.5, 185242.0], [77.6, 185242.0], [77.7, 185242.0], [77.8, 185242.0], [77.9, 185242.0], [78.0, 186817.0], [78.1, 186817.0], [78.2, 186817.0], [78.3, 186817.0], [78.4, 186817.0], [78.5, 186817.0], [78.6, 186817.0], [78.7, 186817.0], [78.8, 186817.0], [78.9, 186817.0], [79.0, 186817.0], [79.1, 186817.0], [79.2, 186817.0], [79.3, 186817.0], [79.4, 186817.0], [79.5, 186817.0], [79.6, 186817.0], [79.7, 186817.0], [79.8, 186817.0], [79.9, 186817.0], [80.0, 186937.0], [80.1, 186937.0], [80.2, 186937.0], [80.3, 186937.0], [80.4, 186937.0], [80.5, 186937.0], [80.6, 186937.0], [80.7, 186937.0], [80.8, 186937.0], [80.9, 186937.0], [81.0, 186937.0], [81.1, 186937.0], [81.2, 186937.0], [81.3, 186937.0], [81.4, 186937.0], [81.5, 186937.0], [81.6, 186937.0], [81.7, 186937.0], [81.8, 186937.0], [81.9, 186937.0], [82.0, 190695.0], [82.1, 190695.0], [82.2, 190695.0], [82.3, 190695.0], [82.4, 190695.0], [82.5, 190695.0], [82.6, 190695.0], [82.7, 190695.0], [82.8, 190695.0], [82.9, 190695.0], [83.0, 190695.0], [83.1, 190695.0], [83.2, 190695.0], [83.3, 190695.0], [83.4, 190695.0], [83.5, 190695.0], [83.6, 190695.0], [83.7, 190695.0], [83.8, 190695.0], [83.9, 190695.0], [84.0, 191639.0], [84.1, 191639.0], [84.2, 191639.0], [84.3, 191639.0], [84.4, 191639.0], [84.5, 191639.0], [84.6, 191639.0], [84.7, 191639.0], [84.8, 191639.0], [84.9, 191639.0], [85.0, 191639.0], [85.1, 191639.0], [85.2, 191639.0], [85.3, 191639.0], [85.4, 191639.0], [85.5, 191639.0], [85.6, 191639.0], [85.7, 191639.0], [85.8, 191639.0], [85.9, 191639.0], [86.0, 191765.0], [86.1, 191765.0], [86.2, 191765.0], [86.3, 191765.0], [86.4, 191765.0], [86.5, 191765.0], [86.6, 191765.0], [86.7, 191765.0], [86.8, 191765.0], [86.9, 191765.0], [87.0, 191765.0], [87.1, 191765.0], [87.2, 191765.0], [87.3, 191765.0], [87.4, 191765.0], [87.5, 191765.0], [87.6, 191765.0], [87.7, 191765.0], [87.8, 191765.0], [87.9, 191765.0], [88.0, 192998.0], [88.1, 192998.0], [88.2, 192998.0], [88.3, 192998.0], [88.4, 192998.0], [88.5, 192998.0], [88.6, 192998.0], [88.7, 192998.0], [88.8, 192998.0], [88.9, 192998.0], [89.0, 192998.0], [89.1, 192998.0], [89.2, 192998.0], [89.3, 192998.0], [89.4, 192998.0], [89.5, 192998.0], [89.6, 192998.0], [89.7, 192998.0], [89.8, 192998.0], [89.9, 192998.0], [90.0, 195223.0], [90.1, 195223.0], [90.2, 195223.0], [90.3, 195223.0], [90.4, 195223.0], [90.5, 195223.0], [90.6, 195223.0], [90.7, 195223.0], [90.8, 195223.0], [90.9, 195223.0], [91.0, 195223.0], [91.1, 195223.0], [91.2, 195223.0], [91.3, 195223.0], [91.4, 195223.0], [91.5, 195223.0], [91.6, 195223.0], [91.7, 195223.0], [91.8, 195223.0], [91.9, 195223.0], [92.0, 196515.0], [92.1, 196515.0], [92.2, 196515.0], [92.3, 196515.0], [92.4, 196515.0], [92.5, 196515.0], [92.6, 196515.0], [92.7, 196515.0], [92.8, 196515.0], [92.9, 196515.0], [93.0, 196515.0], [93.1, 196515.0], [93.2, 196515.0], [93.3, 196515.0], [93.4, 196515.0], [93.5, 196515.0], [93.6, 196515.0], [93.7, 196515.0], [93.8, 196515.0], [93.9, 196515.0], [94.0, 197407.0], [94.1, 197407.0], [94.2, 197407.0], [94.3, 197407.0], [94.4, 197407.0], [94.5, 197407.0], [94.6, 197407.0], [94.7, 197407.0], [94.8, 197407.0], [94.9, 197407.0], [95.0, 197407.0], [95.1, 197407.0], [95.2, 197407.0], [95.3, 197407.0], [95.4, 197407.0], [95.5, 197407.0], [95.6, 197407.0], [95.7, 197407.0], [95.8, 197407.0], [95.9, 197407.0], [96.0, 197440.0], [96.1, 197440.0], [96.2, 197440.0], [96.3, 197440.0], [96.4, 197440.0], [96.5, 197440.0], [96.6, 197440.0], [96.7, 197440.0], [96.8, 197440.0], [96.9, 197440.0], [97.0, 197440.0], [97.1, 197440.0], [97.2, 197440.0], [97.3, 197440.0], [97.4, 197440.0], [97.5, 197440.0], [97.6, 197440.0], [97.7, 197440.0], [97.8, 197440.0], [97.9, 197440.0], [98.0, 198078.0], [98.1, 198078.0], [98.2, 198078.0], [98.3, 198078.0], [98.4, 198078.0], [98.5, 198078.0], [98.6, 198078.0], [98.7, 198078.0], [98.8, 198078.0], [98.9, 198078.0], [99.0, 198078.0], [99.1, 198078.0], [99.2, 198078.0], [99.3, 198078.0], [99.4, 198078.0], [99.5, 198078.0], [99.6, 198078.0], [99.7, 198078.0], [99.8, 198078.0], [99.9, 198078.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 10700.0, "maxY": 2.0, "series": [{"data": [[133600.0, 1.0], [160000.0, 1.0], [169600.0, 1.0], [175200.0, 1.0], [174800.0, 1.0], [185200.0, 1.0], [186800.0, 1.0], [191600.0, 1.0], [195200.0, 1.0], [198000.0, 1.0], [135300.0, 1.0], [158100.0, 1.0], [178100.0, 1.0], [182100.0, 1.0], [186900.0, 1.0], [191700.0, 1.0], [192900.0, 1.0], [196500.0, 1.0], [72900.0, 1.0], [85100.0, 1.0], [150200.0, 1.0], [10700.0, 1.0], [173800.0, 1.0], [183000.0, 1.0], [190600.0, 1.0], [12300.0, 1.0], [197400.0, 2.0], [14200.0, 1.0], [15800.0, 1.0], [16800.0, 1.0], [17800.0, 1.0], [23500.0, 1.0], [24600.0, 1.0], [28600.0, 1.0], [33300.0, 1.0], [34900.0, 1.0], [140700.0, 1.0], [38000.0, 1.0], [41900.0, 1.0], [43600.0, 1.0], [184300.0, 1.0], [48900.0, 1.0], [49200.0, 1.0], [50900.0, 1.0], [59100.0, 1.0], [63800.0, 1.0], [70000.0, 1.0], [108800.0, 1.0], [126800.0, 1.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 198000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.71368814E12, "maxY": 44.0, "series": [{"data": [[1.7136882E12, 33.0], [1.71368832E12, 11.0], [1.71368814E12, 44.0], [1.71368826E12, 25.0]], "isOverall": false, "label": "Primer Escenario", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368832E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 10716.0, "minX": 1.0, "maxY": 198078.0, "series": [{"data": [[2.0, 197440.0], [3.0, 197407.0], [4.0, 196515.0], [5.0, 192998.0], [6.0, 195223.0], [7.0, 190695.0], [8.0, 191639.0], [9.0, 191765.0], [10.0, 186817.0], [11.0, 186937.0], [12.0, 183060.0], [13.0, 184319.0], [14.0, 185242.0], [15.0, 182198.0], [16.0, 178146.0], [17.0, 174871.0], [18.0, 173872.0], [19.0, 175234.0], [20.0, 169654.0], [21.0, 160017.0], [22.0, 158110.0], [23.0, 150261.0], [24.0, 140744.0], [25.0, 135395.0], [26.0, 133675.0], [27.0, 126806.0], [28.0, 108882.0], [29.0, 85150.0], [30.0, 72920.0], [31.0, 70042.0], [33.0, 59154.0], [32.0, 63866.0], [35.0, 49272.0], [34.0, 50968.0], [37.0, 43680.0], [36.0, 48928.0], [39.0, 38048.0], [38.0, 41942.0], [41.0, 33350.0], [40.0, 34933.0], [43.0, 28636.0], [42.0, 23530.0], [45.0, 17815.0], [44.0, 24601.0], [47.0, 15857.0], [46.0, 16896.0], [49.0, 12371.0], [48.0, 14209.0], [50.0, 10716.0], [1.0, 198078.0]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}, {"data": [[25.5, 114057.67999999998]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 23.1, "minX": 1.71368814E12, "maxY": 1.29014553E7, "series": [{"data": [[1.7136882E12, 29.7], [1.71368832E12, 69.3], [1.71368814E12, 42.9], [1.71368826E12, 23.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7136882E12, 5529196.55], [1.71368832E12, 1.29014553E7], [1.71368814E12, 7986615.383333334], [1.71368826E12, 4300485.233333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368832E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 24069.53846153846, "minX": 1.71368814E12, "maxY": 185339.38095238098, "series": [{"data": [[1.7136882E12, 60442.222222222226], [1.71368832E12, 185339.38095238098], [1.71368814E12, 24069.53846153846], [1.71368826E12, 136267.57142857142]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368832E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 24069.0, "minX": 1.71368814E12, "maxY": 185339.28571428568, "series": [{"data": [[1.7136882E12, 60442.11111111111], [1.71368832E12, 185339.28571428568], [1.71368814E12, 24069.0], [1.71368826E12, 136267.57142857142]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368832E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 68.33333333333333, "minX": 1.71368814E12, "maxY": 72.07692307692308, "series": [{"data": [[1.7136882E12, 68.33333333333333], [1.71368832E12, 69.47619047619045], [1.71368814E12, 72.07692307692308], [1.71368826E12, 70.57142857142857]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368832E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10716.0, "minX": 1.71368814E12, "maxY": 198078.0, "series": [{"data": [[1.7136882E12, 85150.0], [1.71368832E12, 198078.0], [1.71368814E12, 41942.0], [1.71368826E12, 158110.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7136882E12, 85150.0], [1.71368832E12, 197433.4], [1.71368814E12, 40384.4], [1.71368826E12, 158110.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7136882E12, 85150.0], [1.71368832E12, 198078.0], [1.71368814E12, 41942.0], [1.71368826E12, 158110.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7136882E12, 85150.0], [1.71368832E12, 198014.2], [1.71368814E12, 41942.0], [1.71368826E12, 158110.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7136882E12, 43680.0], [1.71368832E12, 160017.0], [1.71368814E12, 10716.0], [1.71368826E12, 108882.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7136882E12, 59154.0], [1.71368832E12, 186817.0], [1.71368814E12, 23530.0], [1.71368826E12, 135395.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368832E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 130240.5, "minX": 1.0, "maxY": 194110.5, "series": [{"data": [[1.0, 130240.5], [2.0, 194110.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 130240.5, "minX": 1.0, "maxY": 194110.5, "series": [{"data": [[1.0, 130240.5], [2.0, 194110.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.71368814E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.71368814E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368814E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.71368814E12, "maxY": 0.35, "series": [{"data": [[1.7136882E12, 0.15], [1.71368832E12, 0.35], [1.71368814E12, 0.21666666666666667], [1.71368826E12, 0.11666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71368832E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.71368814E12, "maxY": 0.35, "series": [{"data": [[1.7136882E12, 0.15], [1.71368832E12, 0.35], [1.71368814E12, 0.21666666666666667], [1.71368826E12, 0.11666666666666667]], "isOverall": false, "label": "HTTP Request -Crear Tarea  (Video)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368832E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.71368814E12, "maxY": 0.35, "series": [{"data": [[1.7136882E12, 0.15], [1.71368832E12, 0.35], [1.71368814E12, 0.21666666666666667], [1.71368826E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71368832E12, "title": "Total Transactions Per Second"}},
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

