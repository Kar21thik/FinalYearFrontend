echo '#!/usr/bin/expect
set timeout 20
spawn ssh -p 202 -L 8080:localhost:5000 4nm21cs080@gpu.nmamit.in
expect "password:"
send "hehehehe\r"
interact' > conn.exp
chmod +x conn.exp
./conn.exp