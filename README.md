# Electron版Gear

### インストール

    % make setup   # nodeモジュールインストール
    % make         # coffeeコンパイル
    
### 起動

    % make run
    
### 設定

Videomを見る場合は```~/.gear``` に以下のようにJSONを記述

    {
        "gyazz": "http://gyazz.masuilab.org/Gear",
        "root": "Videom",
        "auth": {
            "video.masuilab.org": {
                "user": "username_for_videom",
                "pass": "password_for_videom"
            }
        }
    }

