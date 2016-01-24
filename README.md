# Electron版Gear

### インストール

    % make setup   # nodeモジュールインストール
    % make         # coffeeコンパイル
    
### 起動

    % make run
    
### 設定

Videomを見る場合は```~/.gear``` に以下のようにJSONを記述

    {
       "video.masuilab.org": {
         "user": "username",
         "pass": "password"
       }
    }

