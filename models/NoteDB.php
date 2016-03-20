<?php
    /*
    ========================================================================
                    Create conexion with Data Base.
                    *Content All methods of DB Notes logic.
                    author : Elihu Alejandro Cruz Albores.
                    version : 1.0.6
    ========================================================================
    */
    require "Conexion.php";
    class NoteDB extends Conexion{

        public function getAllNotes($id){

            if(!$this->isConnected()){return;}

            $query = "SELECT * FROM Notes WHERE id LIKE '$id'";
            $res = mysql_query($query,$this->link);

            if (!$res) {
                echo mysql_error();
                return;
            }
            //Declaration of array to return
            $information = "";
            while ($fila = mysql_fetch_assoc($res)) {//for each of result set
                if($fila['id'] == $id){
                    $information = $information.',{ "id" : "'.$fila['id'].'", "text" : "'.$fila['text'].'", "key_note" : "'.$fila['key_note'].'"}';
                }else{ $information = -1;}
            }
            mysql_close($this->link);
            return ("[".substr($information,1)."]");
        }

        public function removeIdNote($id){

            if(!$this->isConnected()){return;}

            $query = "DELETE FROM Notes WHERE id LIKE $id";
            $res = mysql_query($query,$this->link);

            if ($res) {// Verifiacmos el error de conexion
                //echo "Datos removidos correctamente";
            }else {// en caso de que no regrese resultados
                echo mysql_error();;
            }
            mysql_close($this->link);
        }

        public function updateNotes($id,$text,$key_note){

            if(!$this->isConnected()){return;}

            $query = "INSERT INTO `Notes`(`id`, `text`, `key_note`) VALUES ('$id','$text','$key_note')";
            //$query = "UPDATE `Notes` SET `id`='$id',`text`='$text',`key_note`='$key_note' WHERE id LIKE '$id' AND key_note LIKE '$key_note'";
            $res = mysql_query($query,$this->link);

            if ($res) {// Verifiacmos el error de conexion
                echo "Datos actualizados correctamente";
            }else {// en caso de que no regrese resultados
                echo mysql_error();;
            }
            mysql_close($this->link);
        }

        public function removeNote($id,$key_note){

            if(!$this->isConnected()){return;}

            $query = "DELETE FROM Notes WHERE id LIKE $id AND key_note LIKE $key_note";
            $res = mysql_query($query,$this->link);

            if ($res) {// Verifiacmos el error de conexion
                //echo "Datos removidos correctamente";
            }else {// en caso de que no regrese resultados
                echo mysql_error();;
            }
            mysql_close($this->link);
        }

    }

 ?>
