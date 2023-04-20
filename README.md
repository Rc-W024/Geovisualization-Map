# APP Location of Recharging Points

## Introduction
**Aparcamientos de Vehículos Eléctricos en València**<br>
This is a simple script suitable for mobile applications. It allows users to query the server for open-source data released by the Valencia City Hall in Spain to locate the point where electric vehicles are charged in the corresponding area of the public parking lot.

Additionally, it allows us to display the coordinates of the current location and measure the distance between points of interest.

该脚本适用于网页端和移动端应用程序，允许用户查通过服务器获取西班牙瓦伦西亚市政厅发布的开源数据，以定位公共停车场相应区域的电动车充电点位。此外，它允许显示用户当前位置的坐标，并测量兴趣点之间的距离。

![UPV_Master_19-20_Aplicaciones_geoespaciales_TEMP_MOBILE_HTML_Proyecto](https://user-images.githubusercontent.com/97808991/229072808-040e846e-b7ad-4aff-89af-caf18b55bb42.png)

## Maps
The project provides maps of China (Gaode Map) and the United States (Google Map), as basic data through Leaflet, [`proyecto.js`](https://github.com/Rc-W024/Geovisualization-Map/blob/main/js/proyecto.js). You can find these files here.

In order to load the map correctly, [`leaflet.ChineseTmsProviders.js`](https://github.com/Rc-W024/Geovisualization-Map/blob/main/js/leaflet.ChineseTmsProviders.js) was programmed.

该项目通过Leaflet（[`leaflet.js`](https://github.com/Rc-W024/Geovisualization-Map/blob/main/js/leaflet.js), [`proyecto.js`](https://github.com/Rc-W024/Geovisualization-Map/blob/main/js/proyecto.js)...）提供中国（高德地图）和美国（谷歌地图）地图作为基础底图数据，可在文件中找到这些内容。

## ICONS & Functions
- Get the user's coordinates in real time<br>
获取用户实时坐标

&emsp;&emsp;![image](https://user-images.githubusercontent.com/97808991/150132467-dd3b66e8-1d01-40e5-b0f8-cbca5957fbb2.png)



- Update information on electric recharging points in València<br>
爬取并更新有关瓦伦西亚充电站的信息

&emsp;&emsp;![image](https://user-images.githubusercontent.com/97808991/150132520-e3af2646-9a5b-4298-b9b6-ae97e4bb090c.png)

- Control the display of the informational text box<br>
信息框显示/隐藏控制

&emsp;&emsp;![image](https://user-images.githubusercontent.com/97808991/150132569-bdaec5ce-b718-44bc-8c9e-f86879323547.png)

![UPV_Master_19-20_Aplicaciones_geoespaciales_TEMP_MOBILE_HTML_Proyecto](https://user-images.githubusercontent.com/97808991/229073652-f0edfd9d-aa68-4fc3-8a07-15ff01e5d174.PNG)

- Locate China on the map<br>
在地图中定位到中国

&emsp;&emsp;![image](https://user-images.githubusercontent.com/97808991/150120242-7a8aa441-40a1-4da4-a9b8-1d37c41d901a.png)

![UPV_Master_19-20_Aplicaciones_geoespaciales_TEMP_MOBILE_HTML_Proyecto](https://user-images.githubusercontent.com/97808991/229072911-0c07d95e-db5b-42dd-8acb-d7b43e61a6a5.png)

- Measure function, the tool is allowed on the map</br>
地图测距工具

&emsp;&emsp;![image](https://user-images.githubusercontent.com/97808991/150132620-fe2ccbe9-0686-48e8-a2f5-fe091cc40154.png)
